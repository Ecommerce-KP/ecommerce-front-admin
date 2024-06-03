import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import FormInput from "../components/form/inputs/FormInput";
import ButtonSubmit from "../components/form/buttons/ButtonSubmit";
import { emailValidation, passwordValidation } from "../validations/loginValidation";

export type FormLoginValues = {
  email: string;
  password: string;
};

const Login = () => {
  const methods = useForm<FormLoginValues>();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    console.log(data);
    // Xử lý đăng nhập tại đây
  };

  return (
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
            <ButtonSubmit name="Login" className="mt-[10px]" />
            <div className="text-right mt-[20px]">
              <span className="text-sky-600 text-[12px] hover:underline cursor-pointer">
                Forgot Password?
              </span>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
