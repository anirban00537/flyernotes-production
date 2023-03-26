import { useSignup } from "@/hooks/authentication.hook";
import { useState } from "react";

export const Signup = () => {
  const { errors, handleSubmit, register, handleSignup, isLoading } =
    useSignup();

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="max-w-md w-full bg-white rounded-lg border p-10">
        <div className="text-center ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign up</h2>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            handleSignup(
              data.email,
              data.password,
              data.first_name,
              data.last_name,
              data.nick_name
            );
          })}
        >
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-800"
              htmlFor="first_name"
            >
              First name
            </label>
            <input
              className="border py-2 px-3 text-gray-700"
              type="text"
              placeholder="Enter first name"
              {...register("first_name", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-800"
              htmlFor="last_name"
            >
              Last name
            </label>
            <input
              className="border py-2 px-3 text-gray-700"
              type="text"
              placeholder="Enter last name"
              {...register("last_name", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-800"
              htmlFor="nick_name"
            >
              Nickname
            </label>
            <input
              className="border py-2 px-3 text-gray-700"
              type="text"
              placeholder="Enter nick name"
              {...register("nick_name", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-800"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border py-2 px-3 text-gray-700"
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-800"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border py-2 px-3 text-gray-700"
              type="password"
              placeholder="Enter email"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
