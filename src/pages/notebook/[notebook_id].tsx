import HeadSection from '@/components/Document/HeadSection';
import TimeLineListNotes from '@/components/Document/TimeLineListNotes';
import DashboardLayout from '@/components/Layout/Dashboard.layout';
import { useAddNote, useAllNotesByid } from '@/state/hooks/notes.hook';
import { RootState } from '@/state/store';
import React from 'react';
import { useSelector } from 'react-redux';

const index = () => {
  const { createNote, noteName, setNoteName, notes } = useAllNotesByid();
  return (
    <DashboardLayout>
      <div className="flex w-full flex-col">
        <HeadSection createNote={createNote} />
        <div className=" w-full">
          {notes && <TimeLineListNotes notes={notes} />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default index;
