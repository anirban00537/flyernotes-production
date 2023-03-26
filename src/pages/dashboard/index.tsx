import Badge from "@/components/Editor/EditorHeader/badge";
import DashboardLayout from "@/components/Layout/Dashboard.layout";
import NotfoundComponent from "@/components/NotFound";
import ScaletionSection from "@/components/Scaleton/Section";
import React, { useState } from "react";

const Index = () => {
  const [allTags, setAllTags] = useState([]);
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(false);
  return (
    <DashboardLayout>
      <div className="flex w-full flex-col px-10 ">
        <div className="flex flex-wrap mb-5">
          {allTags?.map((tag: any) => (
            <Badge title={tag} cross={false} />
          ))}
        </div>
        {notes.length === 0 && loading === false && <NotfoundComponent />}
        {loading && <ScaletionSection />}
      </div>
    </DashboardLayout>
  );
};

export default Index;
