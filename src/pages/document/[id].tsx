import dynamic from 'next/dynamic';
import DocumentLayout from '@/components/Layout/Document.layout';
import { useGetNotes } from '@/state/hooks/notes.hook';

const Collapsible = dynamic(() => import('@/components/Editor/Remirror'), {
  ssr: false,
});
export default function Document() {
  const { notesDetails, id } = useGetNotes();
  return (
    <DocumentLayout>
      <div className="sticky top-0 mx-5 min-h-screen document-width">
        {notesDetails && <Collapsible notesDetails={notesDetails} id={id} />}
      </div>
    </DocumentLayout>
  );
}
