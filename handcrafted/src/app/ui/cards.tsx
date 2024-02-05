import Link from "next/link";
import styles from "@/app/ui/cards.module.css";
import { playpen } from "./fonts/fonts";
import Image from "next/image";

export default function CardHolder() {
    return (
        <>
        <div className={styles.outline}>
            <Card title="" image="" price={20} />
            <Card title="" image="" price={20} />
            <Card title="" image="" price={20} />
            <Card title="" image="" price={20} />
        </div>
        <p className={styles.linkInfo}>** Click on the title to see more information about the product. **</p>
        </>
    );
}


{/*David -  i adjusted this Card function so that the image is clickable and routes to the Products page*/}
export function Card({
    title,
    image,
    price,
}: {
    title: string;
    image: string;
    price: number;
}) {
    return (
        <div className={styles.cards}>
            {/* Direct Link usage for the title */}
            <Link href='/products'>
                <h3 className={styles.cardHeader}>{title}</h3>
            </Link>
            {/* Direct Link usage for the image */}
            <Link href='/products'>
                <div className={`${styles.cardImageOutline} items-center`}>
                    <Image
                        src={image}
                        alt={title}
                        className={styles.cardImage}
                        width={200}
                        height={200}
                        layout="intrinsic"
                    />
                </div>
            </Link>
            <p className={`${playpen.className} ${styles.cardPrice}`}>{`Price: $${price}`}</p>
        </div>
    );
}

