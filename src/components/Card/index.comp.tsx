import moment from "moment";
import Link from "next/link";
import React from "react";
import { FaRegStickyNote } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import Badge from "../Editor/EditorHeader/badge";

const Notecard = ({ note }: any) => {
  return (
    <Link href={`/document/${note.id}`}>
      <li className="border rounded-lg sm:flex hover:bg-gray-100 dark:hover:bg-gray-800">
        <a href="#" className="block items-center p-5 w-full">
          <div className=" text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <FaRegStickyNote className="mr-2 text-purple-500 text-2xl" />
              <span className="font-medium text-gray-800 dark:text-white text-lg">
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
                    <Badge
                      key={index}
                      className="mr-2 mb-2 hover:bg-purple-400 dark:hover:bg-purple-700"
                      bgColor="bg-green-200"
                      textColor="text-green-800"
                      title={tag}
                      id={null}
                    />
                  )
              )}
              {note?.data?.tags?.length > 3 && (
                <Badge
                  key={1}
                  // className="mr-2 mb-2 hover:bg-blue-300 dark:hover:bg-blue-700"
                  title={note?.data?.tags?.length - 3 + " more"}
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

export default Notecard;
