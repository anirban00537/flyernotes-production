import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
const AddNoteBook = () => {
  const [show, setShow] = useState(false);

  const [notebookInfo, setNotebookInfo] = useState({
    name: '',
    total: 0,
  });
  const addNotebook = (e: any) => {
    e.preventDefault();

    onClose();
  };
  // const onClick = () => {
  //   setShow(true);
  // };

  const onClose = () => {
    setShow(false);
  };
  return (
    <React.Fragment>
      {/* <button
        type="button"
        onClick={onClick}
        className="item-center mr-2 mb-2 flex w-full justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        
        Add Notebook
      </button> */}
      <AiOutlineFileAdd className="mr-2" color="white" />
      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={addNotebook}>
            <div className="space-y-2 px-1 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Enter Note info
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Notebook name" />
                </div>
                <TextInput
                  id="Text"
                  placeholder="Office work"
                  value={notebookInfo.name}
                  onChange={(e: any) => {
                    setNotebookInfo({ ...notebookInfo, name: e.target.value });
                  }}
                  required={true}
                />
              </div>
              <div className="w-full">
                <Button type="submit" color="purple" className="w-full">
                  Create
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
