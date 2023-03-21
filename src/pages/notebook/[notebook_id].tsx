import HeadSection from "@/components/Document/HeadSection";
import NoteLists from "@/components/Document/NoteLists";
import ToolssectionComponent from "@/components/Document/Toolssection.comp";
import Badge from "@/components/Editor/EditorHeader/badge";
import DashboardLayout from "@/components/Layout/Dashboard.layout";
import Loading from "@/components/Loading";
import NotfoundComponent from "@/components/NotFound";
import ScaletionSection from "@/components/Scaleton/Section";
import { useAddNote, useAllNotesByid } from "@/state/hooks/notes.hook";
import React from "react";

const Index = () => {
  const { createNote, loading, notes, notebook, searchNotes, allTags } =
    useAllNotesByid();
  console.log(allTags, "allTags");
  return (
    <DashboardLayout>
      <div className="flex w-full flex-col px-10 ">
        <HeadSection searchNotes={searchNotes} />
        <ToolssectionComponent createNote={createNote} notebook={notebook} />
        <div className="flex flex-wrap mb-5">
          {allTags.map((tag: any) => (
            <Badge title={tag} cross={false} />
          ))}
        </div>
        <div className=" ">{notes && <NoteLists notes={notes} />}</div>
        {notes.length === 0 && loading === false && <NotfoundComponent />}
        {loading && <ScaletionSection />}
      </div>
    </DashboardLayout>
  );
};

export default Index;
