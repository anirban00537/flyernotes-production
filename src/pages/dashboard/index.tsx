import Search from '@/components/Document/HeadSection';
import TimeLineListNotes from '@/components/Document/TimeLineListNotes';
import DashboardLayout from '@/components/Layout/Dashboard.layout';
import { useInitialAllNotes } from '@/state/hooks/notes.hook';
import React from 'react';

const Index = () => {
  const { notes } = useInitialAllNotes();

  return (
    <DashboardLayout>
      <h2>hollo</h2>
    </DashboardLayout>
  );
};

export default Index;
