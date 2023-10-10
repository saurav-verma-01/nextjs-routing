import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/projects/list">See My Projects</Link>
      <h1>Home Page</h1>
    </main>
  );
}
