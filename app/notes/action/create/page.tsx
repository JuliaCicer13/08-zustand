import NoteForm from "@/components/NoteForm/NoteForm";
import CreateNote from "@/components/CreateNote/CreateNote";
export default function NotePage (){ 
  
      return (
      <>
       <CreateNote/>;
         <NoteForm onClose={closeModal}/>
      </> 
      ) 
   }
