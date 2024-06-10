import { deleteLocalStorage, getLocalStorage } from "../../lib/helpers/localStorageHelper";
import { ApiResponse, FilterParams, RequestError, RequestMethods } from "../../types/request";
import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const instance = axios.create({
        timeout: 10000
})

const getRequestHeaders = (): AxiosRequestHeaders => {
        const headers: {[key: string]: string} = {}
        const accessToken = getLocalStorage('access_token')
        if(accessToken) {
                headers.Authorization = `Bearer ${accessToken}`
        }

        return headers as AxiosRequestHeaders
}

instance.interceptors.request.use(
        async (config) => {
                return {
                        ...config,
                        headers: {
                                ...config.headers,
                                ...getRequestHeaders(),
                        } as AxiosRequestHeaders
                }
        },
        (error) => Promise.reject(error)
)

instance.interceptors.response.use(
        (response) => response,
        async (error) => {
                const status = error?.response?.status
                const errorData = error.response?.data

                if(status === 401) {
                        // Handle logout
                }

                if(status === 403) {
                        deleteLocalStorage('access_token')

                }

                return Promise.reject(error)
        }
)

const formatRequestParams = (params: FilterParams) => {
        if(params === null) return params
        const {page, limit, order, sort, ...otherParams} = params
        return {
                _page: page,
                _limit: limit,
                _order: order,
                _sort: sort,
                ...Object.keys(otherParams)
                .filter((key) => otherParams[key] !== null && otherParams[key] !== undefined && otherParams[key] !== '')
                .reduce((obj: FilterParams, key) => {
                        obj[key] = otherParams[key]
                        return obj
                }, {})
        }
}

const baseRequest = async (
        url: string,
        method: RequestMethods,
        data: unknown = null,
        configs: AxiosRequestConfig = {}
): Promise<[any, RequestError | undefined]> => {
        try {
                const baseUrl = process.env.REACT_APP_PUBLIC_API_URL
                const newConfigs = {
                        ...configs,
                        url: baseUrl + url,
                        method
                }

                if(method === 'GET') {
                        newConfigs.params = formatRequestParams(data as FilterParams)
                } else {
                        newConfigs.data = data
                }

                const res = await instance.request(newConfigs)
                return [res.data.data || res.data, undefined]
        } catch (error) {
                const err = error as AxiosError
                const requestError: RequestError = {}
                if(err.response) {
                        const responseData = err.response.data as ApiResponse<unknown>
                        requestError.message = responseData.message
                        requestError.code = err.response.status
                        requestError.errors = responseData.errors
                } else if(err.request) {
                        requestError.message = err.message
                } else {
                        requestError.message = err.message
                }

                return [undefined, requestError]
        }
}

export default baseRequest