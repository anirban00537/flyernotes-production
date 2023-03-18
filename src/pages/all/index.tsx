import CardComponent from "@/components/Card/index.comp";
import DashboardLayout from "@/components/Layout/Dashboard.layout";
import { useInitialAllNotes } from "@/state/hooks/notes.hook";
import HeadSection from "@/components/Document/HeadSection";
import NoteLists from "@/components/Document/NoteLists";
import NotfoundComponent from "@/components/NotFound";
import ScaletionSection from "@/components/Scaleton/Section";
import React from "react";

const Index = () => {
  const { notes, loading } = useInitialAllNotes();

  return (
    <DashboardLayout>
      <div className="flex w-full flex-col px-10 ">
        <HeadSection />

        <div className=" ">{notes && <NoteLists notes={notes} />}</div>
        {notes.length === 0 && loading === false && <NotfoundComponent />}
        {loading && <ScaletionSection />}
      </div>
    </DashboardLayout>
  );
};

export default Index;
