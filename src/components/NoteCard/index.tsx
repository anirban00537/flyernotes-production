import React from "react";
import Badge from "../Editor/EditorHeader/badge";

const NoteCard = ({ note }: any) => {
  console.log(note, "mnotkmlskamd");
  return (
    <div className="bg-white border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-3">
      <span className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {note.title}
      </span>
      <span className="px-6 py-4">
        {note.labels.map((label: any) => (
          <Badge title={"tttt"} />
        ))}
      </span>
    </div>
  );
};

export default NoteCard;
