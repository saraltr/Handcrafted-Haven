"use client"

import Link from "next/link";
import styles from "@/app/ui/cards.module.css";
import Image from "next/image";
import React, { FC, useEffect, useState } from 'react';

interface Products {
  id: string;
  name: string;
  image: string;
  pricing: number;
  seller: string;
  reviews: Review[];
}

interface CardHolderProps {
  productList: Products[];
  imageUrls: string[];
}


interface Review {
  username: string;
  rating: number;
  comment: string;
}

export const CardHolder: FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [images, setImages] = useState<string[]>([]); // state to store image URLs
  const [loading, setLoading] = useState<boolean>(true); // state to track loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          // sort products by average review rating
          const sortedProducts = data.sort((a: Products, b: Products) => calculateAverageRating(b.reviews) - calculateAverageRating(a.reviews));
          // display only the top 5 products
          const top5Products = sortedProducts.slice(0, 5);
          setProducts(top5Products);
          // preload images
          const imageUrls = top5Products.map((product: Products) => `/images/products${product.image}`);
          setImages(imageUrls);
          setLoading(false); // set loading to false after images are loaded
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // calculate average rating for a product
  const calculateAverageRating = (reviews: Review[]) => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
  };

  return (
    <>
      <h3 className="specialTitle">Top 5 Best Rated</h3>
      <div className={styles.outline}>
        {loading ? (
          // show loader while images are loading
          <div>Loading Products...</div>
        ) : (
          <Card productList={products} imageUrls={images} />
        )}
      </div>
      <p className={styles.linkInfo}>** Click on the title or image to see more information about the product. **</p>
    </>
  );
}

export const Card: FC<CardHolderProps> = ({ productList }) => {
  // console.log(productList);
    return (
      <>
        {productList.map(({ id, name, image, pricing }) => (
        <div key={id} className={styles.cards}>
            <Link
                href={`/catalog/${id}`}>
                <h4 className={styles.cardHeader}>{name}</h4>
            <div className={`${styles.cardImageOutline} items-center`}>
              {image &&
                <Image
                    src={image}
                    alt={name}
                    className={styles.cardImage}
                    width={200}
                    height={200}/>
              }
            </div>
            </Link>
            <h5 className={`${styles.cardPrice}`}>{`$${pricing}`}</h5>
        </div>
        ))}
      </>
    );
};