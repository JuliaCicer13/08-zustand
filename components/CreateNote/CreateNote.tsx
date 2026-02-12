import css from "../CreateNote/CreateNote.module.css";
import NoteForm from "../NoteForm/NoteForm";

export default function CreateNote () {
    return ( 
        <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	   <NoteForm onClose={closeModal}/>
  </div>
</main>
    )
}
