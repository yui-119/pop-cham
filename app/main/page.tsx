'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.all}>
            <Header>
                <div className={styles.first}>
                    <Image
                        className={styles.aikon}
                        src="ロゴアイコン.svg"
                        alt="ロゴアイコン画像"
                        width={60}
                        height={60}
                    />
                    <p className={styles.name}>
                        pop<br />&<br />cham
                    </p>
                </div>
            </Header>
            <main className={styles.main} >
                <Image
                    className={styles.house}
                    src="家アイコン.svg"
                    alt="家アイコン画像"
                    width={253}
                    height={241}
                />
                <Image
                    className={styles.tree}
                    src="木のアイコン.svg"
                    alt="木のアイコン画像"
                    width={142}
                    height={181}
                />
                <Image
                    className={styles.honey}
                    src="ミツバチ.svg"
                    alt="ミツバチの画像"
                    width={46}
                    height={45}
                />
                <h1 className={styles.h1}>
                    Member
                </h1>
                <Image
                    className={styles.cham}
                    src="/ちゃむ.gif"
                    alt="ちゃむの画像"
                    width={250}
                    height={250}
                />
                <Link href="/profile1">
                    <Image
                        className={styles.button1}
                        src="ちゃむボタン.svg"
                        alt="ちゃむボタンの画像"
                        width={142}
                        height={35}
                    />
                </Link>
                <Image
                    className={styles.pop}
                    src="ぽっぷ.svg"
                    alt="ぽっぷの画像"
                    width={140}
                    height={161}
                />
                <Link href="/profile2">
                    <Image
                        className={styles.button2}
                        src="ポップボタン.svg"
                        alt="ポップボタンの画像"
                        width={142}
                        height={35}
                    />
                </Link>
                <Link href="/story">
                <Image
                    className={styles.storybutton}
                    src="物語ボタン.svg"
                    alt="物語ボタンの画像"
                    width={50}
                    height={100}
                />
                </Link>
            </main>
        </div>
    );
}