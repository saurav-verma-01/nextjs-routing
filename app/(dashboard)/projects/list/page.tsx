// import React from 'react'

import Link from "next/link";
import styles from "./projects.module.css";
const page = () => {
  return (
    <main>
      <h2>This is My Project List Page</h2>

      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">Job-It</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car-Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">Hip-Node</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
