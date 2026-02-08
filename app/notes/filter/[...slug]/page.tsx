import SidebarNotes from "../@sidebar/SidebarNotes";
import { QueryClient, HydrationBoundary, dehydrate } from  "@tanstack/react-query";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotePage ({ params }: Props) {
   const queryClient = new QueryClient();
   const {slug} = await params;


   return <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={slug[0]}/>
   </HydrationBoundary>
}