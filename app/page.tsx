'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        pop<br />&<br />cham
      </h1>
      <h2 className={styles.h2}>
        <span>このwebサイトは</span>
        <span>ポメラニアンのポップ</span>
        <span>と</span>
        <span>マルポメのちゃむ</span>
        <span>についての</span>
        <span>物語です</span>
      </h2>
      <Image className={styles.nikukyu}
        src="nikukyu.svg"
        alt="肉球の画像"
        width={111}
        height={96}
      />
      <Image className={styles.nikukyu2}
        src="nikukyu2.svg"
        alt="肉球の画像"
        width={152}
        height={144}
      />
      <Link href="/main">
        <div className={styles['image-link']}>
          <Image className={styles.start}
            src="はじめりボタン.svg"
            alt="はじまりボタンの画像"
            width={294}
            height={57}
          />
        </div>
      </Link>
    </main>
  );
}

