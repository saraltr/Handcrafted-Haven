import { Metadata } from "next";
import ProductLayout from "@/app/ui/product";

export const metadata: Metadata = {
  title: "Product"
};

export default function ProductPage(){
    return(
        <>
            <ProductLayout></ProductLayout>
        </>
    )
}