import React, { HTMLAttributes, HTMLInputTypeAttribute } from "react";
import { useFormContext, RegisterOptions  } from "react-hook-form";

type FormInputProps = {
  type: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  validation?: RegisterOptions;
};

const FormInput = ({
  type,
  label,
  name,
  required,
  placeholder,
  className,
  validation
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 flex items-center"
      >
        {label}{" "}
        <span className="text-danger ml-[5px]">{required ? "*" : ""}</span>
      </label>
      <input
        id={name}
        type={type}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder={placeholder}
        {...register(name, {
          required: required ? `${label} is required` : false,
          ...validation
        })}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FormInput;
