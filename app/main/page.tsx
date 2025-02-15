'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";

export default function Home() {
    return (
        <div>
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
                <h1 className={styles.h1}>
                    Member
                </h1>
            </main>
        </div>
    );
}