import { useSignin } from "@/state/hooks/authentication.hook";

export const Login = () => {
  const { errors, handleSubmit, register, handleLogin, isLoading } =
    useSignin();

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="max-w-md w-full bg-white rounded-lg border p-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sign in with Email
          </h2>
          <p className="text-gray-600">
            Enter your email and password to sign in.
          </p>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            handleLogin(data.email, data.password);
          })}
          className="mt-6"
        >
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
