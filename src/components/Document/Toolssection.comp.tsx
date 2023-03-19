import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const ToolssectionComponent = ({ createNote, notebook }: any) => {
  console.log(notebook, "notebooknotebook");
  return (
    <div className="flex  items-center py-5  border-b mb-5">
      <h1 className="text-3xl mr-3 ">{notebook?.name}</h1>
      <button onClick={createNote} className="flex text-md items-center border px-2 py-1 rounded-sm ">
        Add Note
        <AiOutlinePlus size={18} className="ml-2" />
      </button>
    </div>
  );
};

export default ToolssectionComponent;
