import { useAddNoteBook } from '@/state/hooks/notebook.hook';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';

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
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Note title" />
                </div>
                <TextInput
                  id="Text"
                  placeholder="Office work"
                  value={notebookName}
                  onChange={(e: any) => {
                    setNotebookName(e.target.value);
                  }}
                  required={true}
                />
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
