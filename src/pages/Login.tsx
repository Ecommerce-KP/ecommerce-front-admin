import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import FormInput from "../components/form/inputs/FormInput";
import ButtonSubmit from "../components/form/buttons/ButtonSubmit";
import {
  emailValidation,
  passwordValidation,
} from "../validations/loginValidation";
import { useAuth } from "../lib/context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTE } from "../configs/router";
import { login } from "../services/request/authService";
import { setLocalStorage } from "../lib/helpers/localStorageHelper";
import SpinnerButton from "../components/form/buttons/SpinnerButton";
import Spinner from "../components/ui/loading/Spinner";

export type FormLoginValues = {
  email: string;
  password: string;
};

type ResposenLogin = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate();
  const methods = useForm<FormLoginValues>();
  const { handleSubmit } = methods;
  const { setToken, token } = useAuth();
  const onSubmit: SubmitHandler<FormLoginValues> = async (data) => {
    // Xử lý đăng nhập tại đây
    setIsLoading(true)
    const [res, error] = await login(data.email, data.password);
    if (res) {
      setLocalStorage("access_token", res.access_token);
      setToken(res.access_token);
      navigate(ROUTE.DASHBOARD);
    }

    if (error) {
      console.error(error.message);
    }

    setIsLoading(false)
  };
  return (
    <>
      {token ? (
        <Navigate to={ROUTE.DASHBOARD} replace={true} />
      ) : (
        <div className="w-full h-screen flex items-center justify-center bg-white">
          <div className="w-[500px] min-h-[400px] border rounded-[5px] shadow-md p-[30px]">
            <div className="w-full text-center text-[24px] font-bold py-[10px]">
              Login
            </div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  validation={emailValidation}
                  required
                />
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  validation={passwordValidation}
                  required
                />
                <SpinnerButton label="Login" isLoading={isLoading} className="!w-full"/>
                <div className="text-right mt-[20px]">
                  <span className="text-sky-600 text-[12px] hover:underline cursor-pointer">
                    Forgot Password?
                  </span>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
