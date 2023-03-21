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
  orderBy,
  startAt,
  endAt,
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
  const getAllNotesTags = async () => {};

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
  const [loading, setLoading] = useState(true);
  const [allTags, setAllTags] = useState([]);

  const GlobalNotesData: any = [];
  const getNotes = async () => {
    setLoading(true);
    const notesRef = await collection(db, "notes");
    const noteQuery = query(notesRef, where("user_id", "==", user.uid));
    const Notes = await getDocs(noteQuery);
    const allTags: any = [];
    Notes.forEach((doc) => {
      const noteData = {
        id: doc.id,
        data: doc.data(),
      };
      allTags.push(...noteData.data.tags);
      GlobalNotesData.push(noteData);
    });
    setNotes(GlobalNotesData);
    //@ts-ignore
    setAllTags([...new Set(allTags)]);
    setLoading(false);
  };
  useEffect(() => {
    user?.uid && getNotes();
  }, [user]);
  return { GlobalNotesData, notes, loading, allTags };
};

export const useAllNotesByid = () => {
  const [noteName, setNoteName] = useState("");
  const [notes, setNotes] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notebook, setNotebook] = useState<any>();
  const router = useRouter();
  const user: any = useAuth();

  const { notebook_id } = router.query;
  const GlobalNotesData: any = [];
  const getNotes = async () => {
    setLoading(true);
    const notesRef = await collection(db, "notes");
    const notebookRef = await doc(db, "notebooks", String(notebook_id));
    let noteQuery = query(
      notesRef,
      where("notebook_id", "==", notebook_id),
      where("user_id", "==", user.uid)
    );
    const notebookSnap = await getDoc(notebookRef);
    if (notebookSnap.exists()) {
      setNotebook(notebookSnap.data());
    }

    const Notes = await getDocs(noteQuery);
    const allTags: any | null | undefined = [];
    Notes.forEach((doc) => {
      const noteData = {
        id: doc.id,
        data: doc.data(),
      };
      allTags.push(...noteData.data.tags);
      GlobalNotesData.push(noteData);
    });
    setNotes(GlobalNotesData);
    //@ts-ignore
    const uniqueTags: any = [...new Set(allTags)];
    setAllTags(uniqueTags);
    setLoading(false);
  };
  const searchNotes = async (searchTerm: any) => {
    console.log(searchTerm, "searchTerm");
    setLoading(true);
    const notesRef = await collection(db, "notes");
    const noteQuery = query(
      notesRef,
      where("notebook_id", "==", notebook_id),
      where("title", "==", searchTerm),
      where("user_id", "==", user.uid)
    );
    const notesSnap = await getDocs(noteQuery);
    const searchedNotes: any = [];
    await notesSnap.forEach((doc) => {
      searchedNotes.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    console.log(searchedNotes, "searchedNotes");
    setNotes(searchedNotes);
    setLoading(false);
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
  return {
    noteName,
    setNoteName,
    createNote,
    notes,
    notebook,
    allTags,
    loading,
    searchNotes,
  };
};
