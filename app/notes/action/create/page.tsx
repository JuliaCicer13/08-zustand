import {fetchNoteById} from "@/lib/api";
import { QueryClient, HydrationBoundary, dehydrate } from  "@tanstack/react-query";
import CreateNote from "@/components/CreateNote/CreateNote";

type Props = {
  params: Promise<{ id: string }>;
};
const NotePage = async ({ params }: Props) => { 
   const {id} = await params;
   const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
       queryKey: ["note", id],
       queryFn: () => fetchNoteById(id),
      });
   
      return <HydrationBoundary state={dehydrate(queryClient)}>
         <CreateNote id={id}/>
      </HydrationBoundary>
   }

   export default NotePage