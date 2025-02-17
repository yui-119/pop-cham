'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false);

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
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(true)}
                />
                {open && (
                    <div style={{
                        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                        backgroundColor: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center"
                    }}>
                        <video controls autoPlay
                            style={{
                                width: "80%",   // 画面幅の80%を基準に
                                maxWidth: "400px", // PCでは最大400pxまで
                                maxHeight: "90vh", // PCでは高さを90%までに制限
                                objectFit: "contain" // はみ出さないよう調整
                            }}>
                            <source src="/ポップ動画.mp4" type="video/mp4" />
                        </video>
                        <button
                            style={{ position: "absolute", top: "10px", right: "10px", fontSize: "2rem", color: "#fff" }}
                            onClick={() => setOpen(false)}
                        >×</button>
                    </div>
                )}
            </div>
        </main>
    );
}