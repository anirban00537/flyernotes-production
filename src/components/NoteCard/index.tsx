import React from "react";
import Badge from "../Editor/EditorHeader/badge";
import moment from "moment";

const NoteCard = ({ note }: any) => {
  console.log(note, "mnotkmlskamd");
  return (
    <tr className="bg-white py-5 border-b rounded-lg hover:bg-gray-50 transition-colors duration-200">
      <th scope="col" className="p-2">
        <div className="flex items-center">
          <input
            id="checkbox-all-search"
            type="checkbox"
            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="sr-only">checkbox</label>
        </div>
      </th>
      <td className="px-5 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center">
          <span className="mr-2 font-medium text-purple-600 dark:text-white">
            {note.title}
          </span>
          <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="mr-2 font-medium text-gray-500 dark:text-white">
          {moment(note.updatedAt).format("LLL")}
        </span>
        <span className="mr-2 font-medium text-gray-500 dark:text-white">
          &bull;
        </span>
        <span className="font-medium text-gray-500 dark:text-white">
          {"NOTE"}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex flex-wrap">
          {note.labels.map((label: any) => (
            <Badge
              title={label?.label?.title}
              cross={false}
              className="mr-2 mb-2"
              key={label?.id}
            />
          ))}
        </div>
      </td>
    </tr>
  );
};

export default NoteCard;
