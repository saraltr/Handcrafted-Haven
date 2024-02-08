'use client';
import React, { useState, useEffect } from "react";
import Banner from "@/app/ui/banner";
import bannerImage from "../../public/images/banner1.jpg";
import { CardHolder } from "./ui/cards";
import Testimonials from "./ui/testimonals";

// Assuming Products interface based on earlier provided code
interface Products {
  id: string;
  name: string;
  image: string;
  description: string;
  pricing: number;
  category: string;
}

const Page = () => {
  // Define constants for the number of orders delivered and registered creators
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
        button={true}
      />
       {/* top 5 best rated products cardholder component */}
       <CardHolder></CardHolder>
       <Testimonials></Testimonials>
    </main>
  );
};

export default Page;
