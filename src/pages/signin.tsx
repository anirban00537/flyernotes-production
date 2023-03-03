import { useLogin } from '@/state/hooks/user.hook';
import { FcGoogle } from 'react-icons/fc';
export const Login = () => {
  const { handleLogin } = useLogin();
  return (
    <body className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-xs">
        <div className="mt-6">
          <a
            href="#"
            id="google-login-button"
            className="flex items-center justify-center rounded-full bg-blue-400 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={handleLogin}
          >
            <FcGoogle
              // src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              // alt="Google logo"
              className="mr-2 h-4 w-4"
            />
            Login with Google
          </a>
        </div>
      </div>
    </body>
  );
};
export default Login;
