import CardComponent from "@/components/Card/index.comp";
import DashboardLayout from "@/components/Layout/Dashboard.layout";
import { useInitialAllNotes } from "@/state/hooks/notes.hook";
import HeadSection from "@/components/Document/HeadSection";

import React from "react";

const Index = () => {
  const { notes } = useInitialAllNotes();
  const note = {
    id: 1,
    data: {
      name: "test",
      createdAt: "test",
    },
  };
  return (
    <DashboardLayout>
      <div className="flex w-full flex-col">
        <HeadSection />

        <div className=" custom-timeline rounded-lg  ">
          <ol className="grid grid-cols-4 gap-4">
            <CardComponent note={note} key={1} />
            <CardComponent note={note} key={1} />
            <CardComponent note={note} key={1} />
            <CardComponent note={note} key={1} />
            <CardComponent note={note} key={1} />
            <CardComponent note={note} key={1} />
          </ol>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
