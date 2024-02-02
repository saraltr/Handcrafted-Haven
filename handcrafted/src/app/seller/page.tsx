import { Metadata } from "next";
import { User } from "../ui/user";
import Banner from "../ui/banner";
import bannerImg from "@/public/images/banner4.jpg";

export const metadata: Metadata = {
    title: "Seller"
  };

export default function Seller() {
    return (
        <main>
            <Banner
            bannerImage={bannerImg}
            title="Seller Profile"
            ></Banner>
            <User></User>
        </main>
    )
}