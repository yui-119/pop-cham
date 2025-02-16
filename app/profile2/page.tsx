'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>
                ポップの<br />♡プロフィール♡
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
                src="ぽっぷ.svg"
                alt="ぽっぷの画像"
                width={204}
                height={193}
            />
            <Image
                className={styles.birth}
                src="ポップ誕生日.svg"
                alt="ポップ誕生日の画像"
                width={100}
                height={90}
            />
            <Image
                className={styles.pome}
                src="ポップ種類.svg"
                alt="ポップ種類の画像"
                width={120}
                height={110}
            />
            <Image
                className={styles.seikaku}
                src="ポップ性格.svg"
                alt="ポップ性格の画像"
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