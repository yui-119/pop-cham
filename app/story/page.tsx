'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function Home() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>
                ポップとちゃむの<br />♡おはなし♡
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
            <h2 className={styles.h2}>
                ー ー 第一話 ー ー
            </h2>
            <div className={styles.story}>
                {!showVideo ? (
                    <Image
                        className={styles.firststory}
                        src="第一話.svg"
                        alt="第一話画像"
                        width={280}
                        height={280}
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowVideo(true)}
                    />
                ) : (
                    <video
                        className={styles.firststory}
                        onEnded={() => setShowVideo(false)} // 動画が終わったら画像に戻す
                        controls
                        width="280"
                        autoPlay>
                        <source src="/物語1.mp4" type="video/mp4" />
                        あなたのブラウザは動画タグをサポートしていません。
                    </video>
                )}
            </div>
        </main>
    );
}