import { useLogin } from "@/state/hooks/user.hook";
import { FcGoogle } from "react-icons/fc";
export const Login = () => {
  const { handleLogin } = useLogin();
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="max-w-md w-full bg-white rounded-lg border p-10">
        <div className="text-center ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sign in with Google
          </h2>
          <p className="text-gray-600">
            Click the button below to sign in with your Google account.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            id="google-login-button"
            className="btn-google"
            onClick={handleLogin}
          >
            <FcGoogle className="mr-2 h-6 w-6" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
