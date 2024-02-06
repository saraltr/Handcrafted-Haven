import { Metadata } from "next";
import { User } from "../ui/user";
import Banner from "../ui/banner";
import bannerImg from "@/public/images/banner4.jpg";
import ProductForm from "../ui/seller/form";
import styles from "@/app/ui/seller/seller.module.css";

export const metadata: Metadata = {
    title: "Seller",
    description: 'See your products and add new ones',
  };

export default function Seller() {
    return (
        <main>
            <Banner
            bannerImage={bannerImg}
            title="Seller Profile"
            ></Banner>
            <User></User>
            <div>
                <h3 className={styles.sellerHeader}>Your Added Products</h3>
            </div>
            <div>
                <h4 className={styles.sellerHeader}>Add Your Product</h4>
                <ProductForm />
            </div>
        </main>
    );
}