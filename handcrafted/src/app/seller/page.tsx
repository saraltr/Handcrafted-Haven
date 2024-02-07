import { Metadata } from "next";
import { User } from "../ui/user";
import Banner from "../ui/banner";
import bannerImg from "../../../public/images/banner4.jpg";
import ProductForm from "../ui/seller/form";
import styles from "@/app/ui/seller/seller.module.css";

// get user connection
import { getServerSession } from "next-auth";
import { authConfig } from "../../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Seller",
    description: 'See your products and add new ones',
  };

export default async function Seller() {
    const session: any = await getServerSession(authConfig);
    if(session == null){
        redirect("/");
    } else {
    return (
        <main>
            <Banner
            bannerImage={bannerImg}
            title="Seller Profile"
            ></Banner>
            <User></User>
            <div>
                <h1 className={styles.sellerHeader}>Your Added Products</h1>
            </div>
            <div>
                <h1 className={styles.sellerHeader}>Add Your Product</h1>
                <ProductForm />
            </div>
        </main>
    );
    }
}