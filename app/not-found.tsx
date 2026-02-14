'use client';
import css from "./page.module.css"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
        title: "Type Error 404",
        description: "Page is not find 404!",
     openGraph: {
        title: `Note Hub`,
        description: "There are some notes for your attention",
        url: `https://notehub.com/notes`,
        siteName: 'NoteHub',
        images: [
          {
            url: 'https://ac.goit.global/fullstack/react/og-meta.jpg',
            width: 1200,
            height: 630,
            alt: "Note Hub",
          },
        ],
        type: 'article',
      },
    }
 

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => router.push('/'), 3000);
        return () => clearTimeout(timer);
    }, [router]);
    return (
        <div>
      <h1 className={css.title}>404 - Page not found</h1>
<p className={css.description}>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go back home</Link>
    </div>
    );
};

export default NotFound