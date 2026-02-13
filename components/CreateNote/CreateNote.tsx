"use client";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import type { Note } from "@/types/note";
import css from "../CreateNote/CreateNote.module.css";
import NoteForm from "../NoteForm/NoteForm";
import { useRouter } from 'next/navigation';
import {}
interface CreateNotesPage{
  id: string;
}

export default function CreateNote ({ id }: CreateNotesPage) {
    const router = useRouter();
    const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });


  const closeModal = () => {
    router.back();
  };

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;


    return ( 
        <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	   <NoteForm onClose={closeModal}/>
  </div>
</main>
    )
}
