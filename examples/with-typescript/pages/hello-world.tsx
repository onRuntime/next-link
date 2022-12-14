/* eslint-disable quotes */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "@onruntime/next-link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello world 🥳</h1>

        <p className={styles.description}>
          Go back to <Link href="/">/index.tsx</Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
