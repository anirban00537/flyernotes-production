import { useAddNoteBook } from "@/state/hooks/notebook.hook";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";

const AddNoteBook = () => {
  const [show, setShow] = useState(false);

  const { notebookName, setNotebookName, createNotebook } = useAddNoteBook();
  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <div onClick={onClick}>
        <VscAdd size={15} />
      </div>
      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createNotebook();
            }}
          >
            <div className="space-y-2 px-1 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Enter Notebook name
              </h3>
              <div>
                <input
                  type="text"
                  id="field_name"
                  placeholder="Office work"
                  value={notebookName}
                  onChange={(e: any) => {
                    setNotebookName(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  id="large-input"
                  value={notebookName}
                  onChange={(e: any) => {
                    setNotebookName(e.target.value);
                  }}
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>
              </div>
              <div className="w-full">
                <Button type="submit" color="purple" className="w-full">
                  Create Notebook
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddNoteBook;
