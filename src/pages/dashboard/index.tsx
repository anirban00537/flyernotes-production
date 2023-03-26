import Badge from "@/components/Editor/EditorHeader/badge";
import DashboardLayout from "@/components/Layout/Dashboard.layout";
import NotfoundComponent from "@/components/NotFound";
import NoteCard from "@/components/NoteCard";
import ScaletionSection from "@/components/Scaleton/Section";
import { RootState } from "@/state/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const { notes } = useSelector((state: RootState) => state.notesSlice);

  const [loading, setloading] = useState(false);
  return (
    <DashboardLayout>
      <div className="flex w-full flex-col px-10 ">
        <div className="flex flex-wrap mb-5"></div>
        {notes.length === 0 && loading === false && <NotfoundComponent />}
        {loading && <ScaletionSection />}
        <div className="  sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            {notes.map((note: any) => (
              <NoteCard note={note} />
            ))}
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
