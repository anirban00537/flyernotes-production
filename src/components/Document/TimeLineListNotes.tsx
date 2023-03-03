import { RootState } from '@/state/store';
import React from 'react';
import Link from 'next/link';
import { TbWallpaper } from 'react-icons/tb';
import { useSelector } from 'react-redux';
const TimeLineListNotes = ({ notes }: any) => {
  return (
    <div className="">
      <div className=" custom-timeline rounded-lg  ">
        <ol className="grid grid-cols-4 gap-4">
          {notes?.map((note: any) => (
            <Link href={`/document/${note.id}`}>
              <li>
                <a
                  href="#"
                  className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                >
                  <TbWallpaper className="mr-5" color="purple" />
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {note?.data?.name}
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </Link>
          ))}
        </ol>
      </div>
      {/* <div className="rounded-lg border border-gray-100  p-5 dark:border-gray-700 dark:bg-gray-800">
        <time className="text-lg font-semibold text-gray-900 dark:text-white">
          January 12th, 2022
        </time>
        <ol className="divider-gray-200 mt-3 divide-y dark:divide-gray-700">
          <li>
            <a
              href="#"
              className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
            >
              <SiAzuredataexplorer className="mr-5" color='purple'/>
              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Laura Romeros
                  </span>
                  likes
                  <span className="font-medium text-gray-900 dark:text-white">
                    Bonnie Green's
                  </span>
                  post in
                  <span className="font-medium text-gray-900 dark:text-white">
                    How to start with Flowbite library
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
            >
              <SiBulma className="mr-5"  color='yellow'/>

              <div>
                <div className="text-base font-normal text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Mike Willi
                  </span>
                  react to
                  <span className="font-medium text-gray-900 dark:text-white">
                    Thomas Lean's
                  </span>
                  comment
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
            >
              <SiCliqz className="mr-5" color='blue'/>
              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Jese Leos
                  </span>
                  likes
                  <span className="font-medium text-gray-900 dark:text-white">
                    Bonnie Green's
                  </span>
                  post in
                  <span className="font-medium text-gray-900 dark:text-white">
                    How to start with Flowbite library
                  </span>
                </div>
                <div className="text-sm font-normal">
                  "I wanted to share a webinar zeroheight."
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
            >
              <SiCoop className="mr-5" color='purple'/>
              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  likes
                  <span className="font-medium text-gray-900 dark:text-white">
                    Bonnie Green's
                  </span>
                  post in
                  <span className="font-medium text-gray-900 dark:text-white">
                    Top figma designs
                  </span>
                </div>
                <div className="text-sm font-normal">
                  "I wanted to share a webinar zeroheight."
                </div>
              </div>
            </a>
          </li>
        </ol>
      </div> */}
    </div>
  );
};

export default TimeLineListNotes;
