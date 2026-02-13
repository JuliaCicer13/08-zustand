import Link from 'next/link';
import { NoteTag } from '@/types/note';
import css from './SidebarNotes.module.css';
import {fetchNoteById} from "@/lib/api";
import { QueryClient, HydrationBoundary, dehydrate } from  "@tanstack/react-query";

const tags: NoteTag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

type Props = {
  params: Promise<{ id: string }>;
};

export default async function SidebarNotes({ params }: Props) {
    const {id} = await params;
   const queryClient = new QueryClient();
  

   await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
   });
  return (
    <>
        <Link href="/notes/action/create">Create note</Link>
        <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
    </>

  );
}