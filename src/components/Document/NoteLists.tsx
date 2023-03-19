import React from "react";
import Notecard from "../Card/index.comp";

const TimeLineListNotes = ({ notes }: any) => {
  return (
    <div className="">
      <div className="custom-timeline rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notes?.map((note: any, index: any) => (
            <Notecard note={note} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLineListNotes;
