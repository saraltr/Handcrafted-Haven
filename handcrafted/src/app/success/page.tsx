import { Metadata } from "next";
import Banner from "../ui/banner";
import bannerImg from "@/public/images/banner2.jpg";
import styles from '@/app/ui/success/success.module.css';

export const metadata: Metadata = {
    title: "Successful",
  };

export default function Seller() {
    return (
        <main>
            <Banner
            bannerImage={bannerImg}
            title="Message Was Sent"
            ></Banner>
            <h1 className={styles.line}>Your message was successfully sent to our customer service team.</h1>
            <h1 className={styles.line}>They will get back to you within 24 hours.</h1>
        </main>
    );
}