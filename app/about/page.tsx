import Link from 'next/link';

export default function About() {
    // throw new Error('Error in About page');
  return (
    <>
      <h1>About</h1>
      <Link href='/'>Link to Homepage</Link>
    </>
  );
}
