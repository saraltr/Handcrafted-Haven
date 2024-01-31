import React from "react";
import Banner from "@/app/ui/banner";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import bannerImage from "@/public/images/banner1.jpg";
import { getServerSession } from "next-auth"
import { authConfig } from "../../pages/api/auth/[...nextauth]";

export default async function Page() {
  const nb1 = 35452;
  const nb2 = 11544;

  return (
    <main>
      <Banner
        bannerImage={bannerImage}
        title="Welcome to Handcrafted Haven"
        subtitle="Discover unique and authentic handmade creations!"
        nb1={nb1.toLocaleString("en-US")}
        desc1="Orders Delivered"
        nb2={nb2.toLocaleString("en-US")}
        desc2="Registered Creators"
        buttonText={
          <div className="btnContainer">
            Login Now
            <ArrowRightIcon className="arrowIcon" />
          </div>
        }
      />
    </main>
  );
}