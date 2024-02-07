import { Metadata } from "next";
import React from 'react';
import "@/app/ui/globals.css";
import CatalogCard from "./CatalogCard/Card";
import Search from "@/app/ui/search";

export const metadata: Metadata = {
  title: "Catalog",
};


export default function Catalog() {
  return (
    <>
    
    <CatalogCard></CatalogCard>
    </>
  );
}
