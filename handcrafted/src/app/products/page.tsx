import { Metadata } from "next";
import Card from "./ProductCard/Card";
import Ceramic from "@/public/images/ceramic.jpg";
import Vases from "@/public/images/vases.jpg";
import Wool from "@/public/images/banner4.jpg";
import Clay from "@/public/images/banner3.jpeg";
import "@/app/ui/globals.css";
import styles from "@/app/products/products.module.css";
export const metadata: Metadata = {
  title: "Products",
};
const products = [
  {
    id: 1,
    title: "Ceramic ",
    description: "Elegant and sturdy ceramic varses from high-quality .",
    image: Ceramic,
  },
  {
    id: 2,
    title: "Vintage Leather Sofa",
    description:
      "Luxurious vintage leather sofa with classic design and supreme comfort.",
    image: Clay,
  },
  {
    id: 3,
    title: "Artisanal Ceramic Vase",
    description:
      "Exquisite ceramic vase, meticulously crafted by skilled artisans, perfect for displaying flowers or standalone.",
    image: Vases,
  },
  {
    id: 4,
    title: "Handmade Wool Rug",
    description:
      "Handwoven wool rug featuring intricate patterns and vibrant colors, adding warmth and character to any room.",
    image: Wool,
  },
];

// You can add more products to this array as needed

export default function Page() {
  return (
    <>
      <h1 className={styles.h1}>Products range</h1>
      <div className={styles.products}>
        {products.map((product) => {
          return (
            <Card
              src={product.image}
              title={product.title}
              description={product.description}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  );
}
