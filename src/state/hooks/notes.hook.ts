import { db, useAuth } from "@/database/firebase";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  query,
  where,
  getDoc,
  updateDoc,
} from "firebase/firestore";
//@ts-ignore
import { useRouter } from "next/router";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setNotes } from "../reducer/notebookSlice";
export const useAddNote = () => {
  const router = useRouter();
  const { notebook_id } = router.query;
  const [noteName, setNoteName] = useState("");
  const user: any = useAuth();
  const createNote = async () => {
    try {
      const timeName = moment(new Date().getTime()).format("LLL");
      const preparedDoc = {
        name: timeName,
        createdAt: new Date().getTime(),
        user_id: user.uid,
        content: null,
        notebook_id: notebook_id ? notebook_id : null,
      };
      const response = await addDoc(collection(db, "notes"), preparedDoc);
      router.push("/document/" + response.id);
    } catch (error) {
      console.log(error);
    }
  };
  return { noteName, setNoteName, createNote };
};

export const useNoteEditor = () => {
  const [tags, setTags] = useState<any>([]);
  const [tagName, setTagName] = useState<any>([]);
  const [name, setName] = useState<any>();
  const updateNote = async (id: any, content: any) => {
    const noteRef = doc(db, "notes", id);
    await updateDoc(noteRef, { content: content });
  };
  const addAndUpdateTags = async (id: any) => {
    if (!tagName) {
      return;
    }
    const noteRef = doc(db, "notes", id);
    const newTags = [...tags, tagName];
    setTags([...tags, tagName]);
    setTagName("");
    await updateDoc(noteRef, { tags: newTags });
  };
  const deleteTag = async (id: any, tag: any) => {
    const noteRef = doc(db, "notes", id);
    const newTags = tags.filter((t: any) => t !== tag);
    setTags(newTags);
    console.log(newTags, "New tags");
    await updateDoc(noteRef, { tags: newTags });
  };
  const updateName = async (id: any, name: any) => {
    const noteRef = doc(db, "notes", id);
    await updateDoc(noteRef, { name: name });
  };

  return {
    updateNote,
    addAndUpdateTags,
    updateName,
    tags,
    setTags,
    setName,
    name,
    setTagName,
    tagName,
    deleteTag,
  };
};

export const useGetNotes = () => {
  const router = useRouter();
  const [notesDetails, setNotesDetails] = useState<any>(null);
  const { id } = router.query;
  const user: any = useAuth();
  const getNoteDetails = async () => {
    //@ts-ignore
    const docRef = doc(db, "notes", id);
    const snapshot = await getDoc(docRef);
    console.log(snapshot?.data()?.user_id === user?.uid, "snapshot.data()");
    if (snapshot?.data()?.user_id === user?.uid) {
      setNotesDetails(snapshot.data());
    } else {
      router.back();
    }
  };
  useEffect(() => {
    id && user?.uid && getNoteDetails();
  }, [id, user]);
  return { router, id, notesDetails };
};

export const useInitialAllNotes = () => {
  const user: any = useAuth();
  const [notes, setNotes] = useState([]);

  const GlobalNotesData: any = [];
  const getNotes = async () => {
    const notesRef = await collection(db, "notes");
    const noteQuery = query(notesRef, where("user_id", "==", user.uid));
    const Notes = await getDocs(noteQuery);
    await Notes.forEach((doc) => {
      GlobalNotesData.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setNotes(GlobalNotesData);
  };
  useEffect(() => {
    user?.uid && getNotes();
  }, [user]);
  return { GlobalNotesData, notes };
};
export const useAllNotesByid = () => {
  const [noteName, setNoteName] = useState("");
  const [notes, setNotes] = useState  ([]);
  const [notebook, setNotebook] = useState<any>();
  const router = useRouter();
  const user: any = useAuth();

  const { notebook_id } = router.query;
  const GlobalNotesData: any = [];
  const getNotes = async () => {
    const notesRef = await collection(db, "notes");
    const notebookRef = await doc(db, "notebooks", String(notebook_id));
    let noteQuery = query(
      notesRef,
      where("notebook_id", "==", notebook_id),
      where("user_id", "==", user.uid)
    );
    const notebookSnap = await getDoc(notebookRef);
    if (notebookSnap.exists()) {
      console.log(notebookSnap.data(), "notebook snaop");
      setNotebook(notebookSnap.data());
    }

    const Notes = await getDocs(noteQuery);
    await Notes.forEach((doc) => {
      GlobalNotesData.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setNotes(GlobalNotesData);
  };

  const createNote = async () => {
    try {
      const timeName = moment(new Date().getTime()).format("LLL");
      const preparedDoc = {
        name: timeName,
        createdAt: new Date().getTime(),
        user_id: user.uid,
        content: null,
        tags: [],
        notebook_id: notebook_id ? notebook_id : null,
      };
      const response = await addDoc(collection(db, "notes"), preparedDoc);
      router.push("/document/" + response.id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    user?.uid && getNotes();
  }, [user]);
  return { noteName, setNoteName, createNote, notes, notebook };
};
