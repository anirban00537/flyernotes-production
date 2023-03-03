import { RootState } from '@/state/store';
import React, { useEffect, useState } from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { useDispatch, useSelector } from 'react-redux';
import { EDITOR_JS_TOOLS } from './constants';
import EditorHeader from './Header';
//@ts-ignore
import { DragDrop, Undo } from 'editorjs-drag-drop';
const ReactEditorJS = createReactEditorJS();

function TextEditor() {
  const instanceRef: any = React.useRef(null);
  const [initialData, setInitialData] = useState(null);

  const dispatch = useDispatch();
  const handleReady = () => {
    const editor = instanceRef?.current?._editorJS;
    // new Undo({ editor });
    // new DragDrop(editor);
  };

  async function handleSave() {
    // const savedData = await instanceRef.current.save();
    // setInitialData(savedData);
    // dispatch(getNoteByIdAndUpdateContentAction(selectedNote._id, savedData));
  }

  // useEffect(() => {
  //   if (selectedNote?.content) setInitialData(selectedNote?.content.blocks);
  // }, [selectedNote?.content.blocks, initialData]);

  return (
    <div className="sticky top-0 grid h-screen min-h-screen w-full place-items-center ">
      <>
        {/* <EditorHeader
            selectedNote={selectedNote}
            selectedNoteBook={selectedNoteBook}
          /> */}
        <div className="mt-3">
          <ReactEditorJS
            placeholder="Start typing or press Tab for shortcuts..."
            //@ts-ignore
            onReady={handleReady}
            //@ts-ignore
            tools={EDITOR_JS_TOOLS}
            // defaultBlock="list"
            onInitialize={(instance) => (instanceRef.current = instance)}
            onChange={() => handleSave()}
            autofocus={true}
            //@ts-ignore
            // data={{
            //   blocks: selectedNote?.content?.blocks,
            // }}
          />
        </div>
      </>
      {/* ) : selectedNote === undefined ? (
        <></>
      ) : (
        <div className="noitemBox">
          <img src="./noting-found.svg" width={200} alt="" />
          <p className="mt-2 text-3xl">No Note selected</p>
        </div>
      )} */}
    </div>
  );
}

export default TextEditor;
