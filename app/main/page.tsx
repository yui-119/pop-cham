'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";

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
            </main>
        </div>
    );
}