import { auth } from "@/database/firebase";
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import { setLoading, setNotebooks, setNotes } from "../reducer/notebookSlice";
import nookies from "nookies";
import { PublicRoute } from "@/utils/core-constant";
import { InitialNotebooks } from "./notebook.hook";

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const logout = () => {
    nookies.destroy(null, "token");
    signOut(auth);
    router.push("/");
  };

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await auth.setPersistence(browserSessionPersistence);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      nookies.set(null, "token", token, { path: "/" });
      router.push("/dashboard");
    } catch (e) {
      setErrorMessage("Failed to login. Please try again.");
    }
  };

  return { handleLogin, logout, errorMessage };
};

export const useCheckAuthState = () => {
  const { loading } = useSelector((state: RootState) => state.notebooklice);
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        await setUser(null);
        nookies.set(null, "token", "", { path: "/" });
        if (!PublicRoute.includes(router.asPath)) {
          router.push("/signin");
        }
        await setUser(null);
        await nookies.set(undefined, "token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        nookies.set(null, "token", token, { path: "/" });
        const GlobalNotebooksData = await InitialNotebooks(user);
        dispatch(setNotebooks(GlobalNotebooksData));
        setUser(user);
        dispatch(setLoading(false));
      }
      dispatch(setLoading(false));
    });
    return () => unsubscribe();
  }, []);

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

export const useRequireAuth = () => {
  const router = useRouter();
  const { user, loading } = useCheckAuthState();
  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [loading, user, router]);
  return { user, loading };
};

export const useRequireNoAuth = () => {
  const router = useRouter();
  const { user, loading } = useCheckAuthState();
  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [loading, user, router]);
  return { user, loading };
};
