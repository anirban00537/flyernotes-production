import { RootState } from '@/state/store';
// import 'flowbite';
import { CgNotes } from 'react-icons/cg';
import { useSelector } from 'react-redux';

const SidebarComponent = () => {
  return (
    <aside
      className=" height-full sticky top-0 h-screen border-r bg-gray-100 p-2 pt-0 "
      aria-label="Sidebar"
      style={{
        minWidth: '300px',
        maxWidth: '300px',
      }}
    >
      <div className="overflow-y-auto py-4 px-2 ">
        <a className="mb-5 flex items-center pl-2.5">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800">
            FlyNotes
          </span>
        </a>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="font-norma5 grou flex w-full  items-center rounded-lg p-1 pl-2 text-sm text-gray-800 transition duration-75"
            >
              <CgNotes />
              <span className="ml-3 flex-1 whitespace-nowrap">All</span>
              <span className="mr-1 inline-flex  h-5 w-5 items-center justify-center   rounded-full bg-indigo-500 text-xs font-medium text-white">
                3
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarComponent;
