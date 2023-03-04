import React, { useEffect, useState } from 'react';
import Badge from './badge';
import { useNoteEditor } from '@/state/hooks/notes.hook';

const EditorHeader = ({ notesDetails, id }: any) => {
  const {
    addAndUpdateTags,
    updateName,
    tags,
    setTags,
    setName,
    name,
    setTagName,
    tagName,
    deleteTag,
  } = useNoteEditor();
  console.log(notesDetails, 'notesDetails');

  useEffect(() => {
    setTags(notesDetails.tags);
    setName(notesDetails?.name);
  }, [notesDetails.tags]);
  return (
    <div className="mb-6">
      <div className="mb-5 flex items-center justify-center">
        <input
          type="text"
          id="default-input"
          className="m-0  mr-2 block w-full rounded-lg border-0 p-0 text-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          value={`${name}`}
          onChange={(e: any) => {
            setName(e.target.value);
            updateName(id, e.target.value);
          }}
        />
        <button
          type="button"
          className="rounded-lg bg-blue-700 px-3 py-2 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Share{' '}
        </button>
      </div>
      <div>
        {tags.map((tag: string, index: number) => (
          <Badge key={index} title={tag} deleteTag={deleteTag} id={id} />
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Add tag"
          className="mr-2 rounded-lg border-0 p-0 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          value={tagName}
          onChange={(e) => {
            setTagName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addAndUpdateTags(id);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default EditorHeader;
