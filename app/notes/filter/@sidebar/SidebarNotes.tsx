"use client";

import Link from 'next/link';
import { TAGS } from '@/constants/tags';
import css from "./SidebarNotesClientsStyle.module.css"

export default function SidebarNotes ()  {
  return (
    <ul className={css.containerLink}>
      <li className={css.linkWrapper}>
        <Link className={css.linkStyle} href={"/notes/filter/all"}>All notes</Link>
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

