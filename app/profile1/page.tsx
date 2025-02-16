'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>
                ちゃむの<br />♡プロフィール♡
            </h1>
            <Link href="/main">
                <Image
                    className={styles.return}
                    src="戻るアイコン.svg"
                    alt="戻るアイコン画像"
                    width={40}
                    height={40}
                />
            </Link>
            <Image
                className={styles.cham}
                src="ちゃむ2.svg"
                alt="ちゃむ2の画像"
                width={204}
                height={193}
            />
            <Image
                className={styles.birth}
                src="ちゃむ誕生日.svg"
                alt="ちゃむ誕生日の画像"
                width={100}
                height={90}
            />
            <Image
                className={styles.marupome}
                src="ちゃむ種類.svg"
                alt="ちゃむ種類の画像"
                width={120}
                height={110}
            />
            <Image
                className={styles.food}
                src="ちゃむ食べ物.svg"
                alt="ちゃむ食べ物の画像"
                width={130}
                height={120}
            />
            <div className={styles['image-link']}>
                <Image className={styles.chamlink}
                    src="モデル犬リンク.svg"
                    alt="モデル犬リンクの画像"
                    width={294}
                    height={57}
                />
            </div>
        </main>
    );
}