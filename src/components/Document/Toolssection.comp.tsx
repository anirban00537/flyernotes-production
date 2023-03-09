import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const ToolssectionComponent = ({ createNote }: any) => {
  return (
    <div className="flex px-10 items-center py-5">
      <h1 className="text-3xl mr-3">Tribunal and restriction area</h1>
      <button onClick={createNote} className="flex text-lg items-center">
        Add Note
        <AiOutlinePlus size={18} className="ml-2" />
      </button>
    </div>
  );
};

export default ToolssectionComponent;
