import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const ToolssectionComponent = ({ createNote, notebook }: any) => {
  return (
    <div className="flex  items-center py-5 mx-10 border-b mb-5">
      <h1 className="text-3xl mr-3 uppercase">{notebook?.name}</h1>
      <button onClick={createNote} className="flex text-lg items-center">
        Add Note
        <AiOutlinePlus size={18} className="ml-2" />
      </button>
    </div>
  );
};

export default ToolssectionComponent;
