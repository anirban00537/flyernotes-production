import React from "react";
import { ImCross } from "react-icons/im";
const Badge = ({
  px = 2,
  py = 0.5,
  title,
  deleteTag,
  id,
  text = "xs",
  cross = true,
}: any) => {
  return (
    <span
      id="badge-dismiss-gray"
      className={`m-1 mr-2 inline-flex items-center rounded-md bg-purple-400 px-${px} py-${py} text-${text} font-medium text-white dark:bg-purple-700 dark:text-gray-300 hover:bg-purple-600 cursor-pointer transition-all duration-200 ease-in-out`}
    >
      {title}
      {cross === true && (
        <button
          type="button"
          className="ml-2 flex-shrink-0 w-3 h-3 rounded-full bg-purple text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          data-dismiss-target="#badge-dismiss-gray"
          aria-label="Remove"
          onClick={() => {
            deleteTag(id, title);
          }}
        >
          <ImCross className="text-purple-600" size={10} />
        </button>
      )}
    </span>
  );
};

export default Badge;
