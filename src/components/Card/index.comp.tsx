import moment from "moment";
import Link from "next/link";
import React from "react";
import { FaRegStickyNote } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { FaTag } from "react-icons/fa";
import Badge from "../Editor/EditorHeader/badge";

const NoteCard = ({ note }: any) => {
  return (
    <Link href={`/document/${note.id}`}>
      <li className="relative border rounded-sm sm:flex hover:shadow-md ">
        <a href="#" className="block p-3 w-full dark:bg-gray-800">
          <div className="text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <FaRegStickyNote className="mr-2 text-purple-500 text-xl" />
              <span className="font-medium text-black dark:text-white text-xl">
                {note?.data?.name}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <IoCalendarOutline className="mr-2 text-gray-500" />
              <span className="font-normal text-gray-500 dark:text-white text-sm">
                {moment(note?.data?.createdAt).subtract(1, "days").calendar()}
              </span>
            </div>
            <div className="flex flex-wrap mt-2">
              {note?.data?.tags?.map(
                (tag: any, index: number) =>
                  index < 3 && (
                    <Badge key={index} title={tag} id={null} cross={false} />
                  )
              )}
              {note?.data?.tags?.length > 3 && (
                <Badge
                  key={1}
                  className="mr-2 mb-2 hover:scale-110 transform transition-all duration-300 ease-in-out"
                  title={`${note?.data?.tags?.length - 3}` + " more"}
                  id={null}
                  cross={false}
                />
              )}
            </div>
          </div>
        </a>
      </li>
    </Link>
  );
};

export default NoteCard;
