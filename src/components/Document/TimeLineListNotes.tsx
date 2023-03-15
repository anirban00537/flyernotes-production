import React from "react";
import Notecard from "../Card/index.comp";
const TimeLineListNotes = ({ notes }: any) => {
  return (
    <div className="">
      <div className=" custom-timeline rounded-lg  ">
        <ol className="grid grid-cols-4 gap-4">
          {notes?.map((note: any, index: any) => (
            <Notecard note={note} key={index} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TimeLineListNotes;
