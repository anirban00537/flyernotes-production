import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { BiDockBottom } from 'react-icons/bi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import AddNoteBook from '@/components/AlterSidebar/AddModals/AddNotebook';
import Link from 'next/link';

const NoteBookCollapse = ({ notebooks }: any) => {
  return (
    <li>
      <button
        type="button"
        className="grou flex w-full items-center rounded-lg p-1 pl-2 text-sm font-normal text-gray-800 transition duration-75  "
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
      >
        <span className=" flex-1 whitespace-nowrap text-left text-lg text-gray-900">
          Notebooks
        </span>
        <AddNoteBook />
      </button>
      <ul id="dropdown-example" className="space-y-2 py-2 pl-0">
        <li onClick={() => {}}>
          {notebooks?.map((notebook: any, index: number) => (
            <Link href={`/notebook/${notebook.id}`} key={index}>
              <a
                className={`grou flex w-full items-center  p-2  text-sm  text-gray-800 transition duration-75 `}
              >
                <BiDockBottom className="mr-2" />
                <span className=" flex-1 whitespace-nowrap">
                  {notebook?.data?.name}
                </span>
                <BiDotsHorizontalRounded />
              </a>
            </Link>
          ))}
        </li>
      </ul>
    </li>
  );
};

export default NoteBookCollapse;
