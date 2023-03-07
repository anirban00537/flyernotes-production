import { auth } from '@/database/firebase';
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';
import { setLoading, setNotebooks, setNotes } from '../reducer/notebookSlice';
import nookies from 'nookies';
import { AuthRoute } from '@/utils/core-constant';
import { InitialNotebooks } from './notebook.hook';

export const useLogin = () => {
  const router = useRouter();
  function logout() {
    nookies.destroy;
    signOut(auth);
  }
  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await auth.setPersistence(browserSessionPersistence);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (e: any) {}
  };

  return { handleLogin, logout };
};

export const useCheckAuthState = () => {
  const { loading } = useSelector((state: RootState) => state.notebooklice);
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    dispatch(setLoading(true));
    return auth.onAuthStateChanged(async (user) => {
      if (!user) {
        await setUser(null);
        await nookies.set(undefined, "token", "", { path: "/" });
        if (AuthRoute.includes(router.asPath)) {
          await router.push("/signin");
        }
        dispatch(setLoading(false));
      } else {
        const token = await user.getIdToken();
        await setUser(user);
        await nookies.set(undefined, "token", token, { path: "/" });
        const GlobalNotebooksData = await InitialNotebooks(user);
        await dispatch(setNotebooks(GlobalNotebooksData));
        dispatch(setLoading(false));
      }
    });
  }, [router.asPath]);
  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return { loading, user };
};
