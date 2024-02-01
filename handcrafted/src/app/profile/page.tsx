import { User } from "../ui/user";
import Banner from "../ui/banner";
import bannerImg from "@/public/images/banner4.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile"
};

export default function Profile() {
    return (
        <main>
            <Banner
            bannerImage={bannerImg}
            title="User Profile"
            ></Banner>
            <User></User>
        </main>
    )
}