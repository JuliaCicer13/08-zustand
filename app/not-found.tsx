'use client';
import css from "./page.module.css"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Metadata from "next";

export const metadata: Metadata = {
    title: "Error!",
    description: "Something went wrong! Refresh your page please or try again.",
};

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