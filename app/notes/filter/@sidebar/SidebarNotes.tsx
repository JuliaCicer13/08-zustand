import Link from 'next/link';
import { TAGS } from '@/constants/tags';
import css from '../@sidebar/SidebarNotes.module.css';

const SidebarNotes = async () => {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem }>
        <Link className={css.menuLink} href={`/notes/filter/all`}>All notes</Link>
      </li>
      {TAGS.map((tag) => (
        <li key={tag}>
          <Link href={`/notes/filter/${tag}`}>
          {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;