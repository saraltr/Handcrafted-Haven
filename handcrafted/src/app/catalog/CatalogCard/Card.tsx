"use client"

import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import Link from 'next/link';

interface Products {
  id: string;
  name: string;
  image: string;
  description: string;
  pricing: number;
  category: string;
}

interface CardHolderProps {
  productList: Products[];
}

const Card: FC<CardHolderProps> = ({ productList }) => {
  return (
    <div className={styles.card}>
      {productList.map(({ id, name, image, description, pricing, category }) => (
        <div key={id} className={styles.cardContent}>
          <span className={styles.cat}>Category/{category}</span>
          <Link
            href={`/catalog/${id}`}>
            <Image src={`/public/images/products${image}`} alt={`${name} image`} className={styles.cardImage} width={260} height={280} />
            <h2 className={styles.cardTitle}>{name}</h2>
          </Link>
          <p className={styles.cardDescription}>{description}</p>
          <p className={styles.price}>{pricing}</p>
        </div>
      ))}
    </div>
  );
};

export default function CatalogCard() {
    const [products, setProducts] = useState<Products[]>([]);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          console.log(data);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className={styles.h1}>Catalog</h1>
      <Card productList={products}
      ></Card>
    </>
  );
}