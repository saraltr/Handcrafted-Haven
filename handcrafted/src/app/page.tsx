// Import necessary modules and components
import React from "react";
import Banner from "@/app/ui/banner";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import bannerImage from "@/public/images/banner1.jpg";
import Search from "@/app/ui/search";
import CardHolder  from '@/app/ui/cards';

// Define the Page component
export default async function Page() {
  // Define constants for the number of orders delivered and registered creators
  const nb1 = 35452;
  const nb2 = 11544;

  // Return the JSX to render for this component
  return (
    <main>
      {/* Render the Banner component with the given props */}
      <Banner
        bannerImage={bannerImage}
        title="Welcome to Handcrafted Haven"
        subtitle="Discover unique and authentic handmade creations!"
        nb1={nb1.toLocaleString("en-US")} // Convert the number of orders to a string with a US locale
        desc1="Orders Delivered"
        nb2={nb2.toLocaleString("en-US")} // Convert the number of creators to a string with a US locale
        desc2="Registered Creators"
        buttonText={
          // Render a div containing the text "Register Now" and an arrow icon
          <div className="btnContainer">
            Login Now
            <ArrowRightIcon className="arrowIcon" />
          </div>
        }
      />
      {/* Render the Search component */}
      <Search />
      <CardHolder />
    </main>
  );
}