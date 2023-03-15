import moment from "moment";
import Link from "next/link";
import React from "react";
import { TbWallpaper } from "react-icons/tb";
import Badge from "../Editor/EditorHeader/badge";

const Notecard = ({ note }: any) => {
  return (
    <Link href={`/document/${note.id}`}>
      <li className="border rounded-lg sm:flex">
        <a href="#" className="block items-center p-5 w-full">
          <div className=" text-gray-600 dark:text-gray-400">
            <div className="flex items-center  text-2xl font-normal">
              {/* <TbWallpaper className="mr-2 text-gray-600" /> */}
              <span className="font-medium text-gray-800 dark:text-white ">
                {note?.data?.name}
              </span>
            </div>
            <div className="text-sm mt-2">
              <span className="font-normal text-gray-500 dark:text-white">
                {moment(note?.data?.createdAt).subtract(1, "days").calendar()}
              </span>
            </div>
            <div className="mt-2">
              {note?.data?.tags?.map(
                (tag: any, index: number) =>
                  index < 3 && (
                    <Badge key={index} cross={false} title={tag} id={null} />
                  )
              )}
              {note?.data?.tags?.length > 3 && (
                <Badge
                  key={1}
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
