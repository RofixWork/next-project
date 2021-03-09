import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <div className={styles.home}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, enim!
          Deleniti laborum eaque animi ducimus iusto dolor exercitationem
          assumenda minima?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minus animi impedit suscipit architecto, odio inventore nostrum
          non neque dicta. Quam magni accusantium culpa distinctio tempore iure
          accusamus, dolorem nobis odit.
        </p>
        <Link href="/info">
          <a className={styles.btn}>Information</a>
        </Link>
      </div>
    </>
  );
}
