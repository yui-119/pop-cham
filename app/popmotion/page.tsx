'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const [isGif, setIsGif] = useState(false); // GIF表示を管理するstate

    const handleMouseEnter = () => {
        // タッチで撫でたらGIFに切り替え
        setIsGif(true);
    };

    const handleTouchStart = () => {
        // マウスで撫でたらGIFに切り替え
        setIsGif(true);
    };

    const handleMouseLeave = () => {
        // マウスが画像から離れたら元の画像に戻す
        setIsGif(false);
    };

    const handleTouchEnd = () => {
        // タッチが終わったら元の画像に戻す
        setIsGif(false);
    };

    return (
        <main className={styles.main}>
            <Link href="/profile2">
                <Image
                    className={styles.return}
                    src="戻るアイコン.svg"
                    alt="戻るアイコン画像"
                    width={40}
                    height={40}
                />
            </Link>
            <div className={styles.pop}>
                {!isGif ? (
                    <Image
                        className={styles.dogImage} // 画像クラス名
                        src="ポップ最初.svg" // 画像パス
                        alt="犬の画像"
                        width={400}
                        height={400}
                        onMouseEnter={handleMouseEnter}  // マウスが画像に触れた時
                        onTouchStart={handleTouchStart}  // タッチが始まった時
                    />
                ) : (
                    <Image
                        src="/ポップ撫でる.gif" // GIFファイルのパス
                        alt="犬のアニメーション"
                        className={styles.dogGif}
                        width={400}
                        height={400}
                        onMouseLeave={handleMouseLeave}  // マウスが画像から離れた時
                        onTouchEnd={handleTouchEnd}  // タッチが終わった時
                    />
                )}
            </div>
        </main>
    );
}
