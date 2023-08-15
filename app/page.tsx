import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/about">Got to about page</Link>
      <p>this is my first NextJS program</p>
    </main>
  );
}
