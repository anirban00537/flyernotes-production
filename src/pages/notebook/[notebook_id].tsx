import HeadSection from "@/components/Document/HeadSection";
import NoteLists from "@/components/Document/NoteLists";
import ToolssectionComponent from "@/components/Document/Toolssection.comp";
import DashboardLayout from "@/components/Layout/Dashboard.layout";
import NotfoundComponent from "@/components/NotFound";
import { useAddNote, useAllNotesByid } from "@/state/hooks/notes.hook";
import React from "react";

const Index = () => {
  const { createNote, noteName, setNoteName, notes, notebook } =
    useAllNotesByid();
  return (
    <DashboardLayout>
      <div className="flex w-full flex-col">
        <HeadSection />
        <ToolssectionComponent createNote={createNote} />
        <div className=" w-full">{notes && <NoteLists notes={notes} />}</div>
        {notes.length === 0 && <NotfoundComponent />}
      </div>
    </DashboardLayout>
  );
};

export default Index;
