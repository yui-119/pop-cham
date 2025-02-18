'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const [dogImage, setDogImage] = useState("ポップ最初.svg"); // 初期画像
    const [isGif, setIsGif] = useState(false); // 撫でたときのGIF制御

    const handleMouseEnter = () => setIsGif(true);
    const handleMouseLeave = () => setIsGif(false);
    const handleTouchStart = () => setIsGif(true);
    const handleTouchEnd = () => setIsGif(false);

    // ボタンをクリックすると新しいGIFに変更
    const handleClick = () => {
        setDogImage("/ポップお手.gif"); // 別のGIFに変更
        setTimeout(() => {
            setDogImage("ポップ最初.svg"); // 2秒後に元の画像に戻す
        }, 1500);
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
                        className={styles.dogImage}
                        src={dogImage} // クリック後のGIFも反映
                        alt="犬の画像"
                        width={300}
                        height={300}
                        onMouseEnter={handleMouseEnter}
                        onTouchStart={handleTouchStart}
                    />
                ) : (
                    <Image
                        src="/ポップ撫でる.gif"
                        alt="犬のアニメーション"
                        className={styles.dogGif}
                        width={300}
                        height={300}
                        onMouseLeave={handleMouseLeave}
                        onTouchEnd={handleTouchEnd}
                    />
                )}
            </div>

            {/* クリックすると特別なGIFに切り替わるボタン */}
            <div onClick={handleClick} className={styles.otebutton}>
                <Image
                    src="お手ボタン.svg"
                    alt="お手ボタン画像"
                    width={60}
                    height={60}
                />
            </div>
        </main>
    );
}
