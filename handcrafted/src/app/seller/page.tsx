import { Metadata } from "next";
import { User } from "../ui/user";
import Banner from "../ui/banner";
import bannerImg from "../../../public/images/banner4.jpg";

// get user connection
import { getServerSession } from "next-auth";
import { authConfig } from "../../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Seller",
    description: 'Add new products and view them in the catalog',
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
        </main>
    );
    }
}