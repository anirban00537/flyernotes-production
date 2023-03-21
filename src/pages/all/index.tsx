import CardComponent from "@/components/Card/index.comp";
import DashboardLayout from "@/components/Layout/Dashboard.layout";
import { useInitialAllNotes } from "@/state/hooks/notes.hook";
import HeadSection from "@/components/Document/HeadSection";
import NoteLists from "@/components/Document/NoteLists";
import NotfoundComponent from "@/components/NotFound";
import ScaletionSection from "@/components/Scaleton/Section";
import React from "react";
import Badge from "@/components/Editor/EditorHeader/badge";

const Index = () => {
  const { notes, loading, allTags } = useInitialAllNotes();
  console.log(allTags, "allTagsallTags");
  return (
    <DashboardLayout>
      <div className="flex w-full flex-col px-10 ">
        <HeadSection />
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
