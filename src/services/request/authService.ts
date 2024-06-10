import baseRequest from "./base"

const baseUrl = 'http://localhost:8000/api/v1'

export const login = async (email: string, password: string) => {
    return await baseRequest('/admin/login', 'POST', {
        email: email,
        password: password
    })
}