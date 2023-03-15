import { db, useAuth } from "@/database/firebase";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  getDocFromCache,
  doc,
  query,
  where,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import moment from "moment";
import { useRouter } from "next/router";

export const useAddNoteBook = () => {
  const router = useRouter();
  const [notebookName, setNotebookName] = useState("");
  const user: any = useAuth();
  const createNotebook = async () => {
    try {
      const preparedDoc = {
        name: notebookName,
        createdAt: new Date().getTime(),
        user_id: user.uid,
      };
      const response = await addDoc(collection(db, "notebooks"), preparedDoc);
      router.push("/notebook/" + response.id);
    } catch (error) {
      console.log(error);
    }
  };
  return { notebookName, setNotebookName, createNotebook };
};
export const InitialNotebooks = async (user: any) => {
  const NotebookRef = await collection(db, "notebooks");
  const noteBookQuery = query(NotebookRef, where("user_id", "==", user.uid));

  const Notebooks = await getDocs(noteBookQuery);
  const GlobalNotebooksData: any = [];
  await Notebooks.forEach((doc) => {
    GlobalNotebooksData.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return GlobalNotebooksData;
};
