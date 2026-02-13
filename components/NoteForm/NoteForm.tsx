'use client';
import css from "../NoteForm/NoteForm.module.css"
import { useId } from "react";
import { useMutation, useQueryClient} from '@tanstack/react-query';
import * as Yup from "yup";
import {createNote} from "../../lib/api"
import {ErrorMessage} from "formik";
import Loader from "../Loader/loader";
import { useNoteDraftStore } from '@/lib/stores/noteStore';

interface NoteFormProps {

 onClose: () => void;
}

interface FormValues {
  title: string,
  content: string,
  tag: string,
};

const initialValues: FormValues = {
  title: "",
  content: "",
  tag: "Todo",
};

export default function NoteForm ({onClose}: NoteFormProps) {
const queryClient = useQueryClient();
const fieldId = useId();
const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
	  // 4. Коли користувач змінює будь-яке поле форми — оновлюємо стан
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };

const {mutate, isPending} = useMutation({
  mutationFn: createNote,
  onSuccess: () => {
    clearDraft();
    queryClient.invalidateQueries({queryKey: ["notes"]});
    onClose();
  },
  onError: () => {

  },
});


const validationSchema = Yup.object().shape({
  title: Yup.string().min(3).max(50).required("Title is required"),
  content: Yup.string().max(500 , "Max length is 500"),
  tag: Yup.string().required(),
});

const handleSubmit = (values: FormValues) => {
  mutate(values);
};

return (
   <form className={styles.form} action={handleSubmit}>
      <label className={styles.label}>
        Title
        <input type="text" name="title" defaultValue={draft?.title} onChange={handleChange} />
      </label>

      <label className={styles.label}>
        Content
        <textarea name="content" defaultValue={draft?.content} onChange={handleChange}></textarea>
      </label>

    <ErrorMessage name="title" component="p" className={css.error}
    />
  </form>

  <div className={css.formGroup}>
    <label htmlFor="content">Content</label>
    <Field as="textarea"
      id="content"
      name="content"
      rows={8}
      className={css.textarea}
      defaultValue={draft?.title} onChange={handleChange}
    />
     <ErrorMessage name="content" component="p" className={css.error}/>
  </div>

  <div className={css.formGroup}>
    <label htmlFor="tag">Tag</label>
    <Field as="select" id={`${fieldId}-tag`} name="tag" className={css.select} defaultValue={draft?.title} onChange={handleChange}>
      <option value="Todo">Todo</option>
      <option value="Work">Work</option>
      <option value="Personal">Personal</option>
      <option value="Meeting">Meeting</option>
      <option value="Shopping">Shopping</option>
    </Field>
     <ErrorMessage name="tag" component="p" className={css.error}/>
  </div>

  <div className={css.actions}>
    <button type="button" className={css.cancelButton} onClick={onClose}> Cancel</button>
    <button type="submit" className={css.submitButton} disabled={isPending}>
     {isPending ? <Loader/> : "Create note" }
    </button>
  </div>
  )}