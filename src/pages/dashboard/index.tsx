import Badge from "@/components/Editor/EditorHeader/badge";
import DashboardLayout from "@/components/Layout/Dashboard.layout";
import NotfoundComponent from "@/components/NotFound";
import NoteCard from "@/components/NoteCard";
import ScaletionSection from "@/components/Scaleton/Section";
import Search from "@/components/Search/NoteSearch";
import { RootState } from "@/state/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const { notes } = useSelector((state: RootState) => state.notesSlice);

  const [loading, setloading] = useState(false);
  return (
    <DashboardLayout>
      <div className="flex w-full flex-col px-10 ">
        <div className="my-5">
          <Search />
        </div>
        {notes.length === 0 && loading === false && <NotfoundComponent />}
        {loading && <ScaletionSection />}
        {notes.map((note: any) => (
          <table>
            <NoteCard note={note} />
          </table>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Index;
