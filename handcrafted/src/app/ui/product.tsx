"use client"

import Image from "next/image";
import React, { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import styles from "@/app/ui/products.module.css"
import ReviewForm from "./reviewForm";
import axios from "axios";

interface Products {
  id: string;
  name: string;
  image: string;
  pricing: number;
  seller: string;
  description: string;
  reviews: Review[];
  category: string;
  material: string;
  sizes: string
}

interface Review {
  username: string;
  rating: number;
  comment: string;
}

interface ProductProps {
  productInfo: Products[];
}

const ProductCard: FC<ProductProps> = ({ productInfo }) => {
  // extracts the path url
  const pathname = usePathname();
  const productId = pathname?.split("/").pop();

  // find matching id
  const product = productInfo.find(product => product.id === productId);

  return (
    <div>
      {product && (
        <div key={product.id}>
          <span className={styles.category}>Category/{product.category}</span>
          <h1 className={styles.productName}>{product.name}</h1>
          <Image
            className={styles.productImage}
            src={product.image}
            alt={`${product.name} image`}
            width={200}
            height={200}
            layout="responsive"
          ></Image>
          <h2 className={styles.seller}>Seller: {product.seller}</h2>
          <p className={styles.pricing}>{`$${product.pricing}`}</p>
          <p className={styles.desc}>{product.description}</p>
          <div className={styles.details}>
            <ul>
              <li>
                <span>Materials:</span>
                <p>{product.material}</p>
              </li>
              <li>
                <span>Sizes:</span>
                <p>{product.sizes}</p>
              </li>
            </ul>
          </div>
          <div className={styles.reviews}>
            <h2>Reviews:</h2>
            {product.reviews.map((review, index) => (
              <div className={styles.review} key={index}>
                <div className={styles.reviewDetails}>
                  <div className={styles.reviewHeader}>
                    <p className={styles.username}>{review.username}</p>
                    <p className={styles.rating}>Rating: {review.rating}/5</p>
                  </div>
                  <p className={styles.comment}>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ProductLayout() {
  const pathname = usePathname();
  const productId = pathname?.split("/").pop() ?? "";

  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products");
        if (response.status === 200) {
          setProducts(response.data);
          // console.log(response.data);
        } else {
          setError("Failed to fetch products");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch products");
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.productCard}>
      {error ? (
        <p>Error: {error}. Try again later!</p>
      ) : (
        <>
          <ProductCard productInfo={products}></ProductCard>
          <ReviewForm productId={productId}></ReviewForm>
        </>
      )}
    </section>
  )
}