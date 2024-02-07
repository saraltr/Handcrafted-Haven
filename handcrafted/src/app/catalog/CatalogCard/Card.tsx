
'use client';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import Link from 'next/link';
import Search from "@/app/ui/search";


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
            href={`/product/${id}?product=${name}`}>
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

const CatalogCard = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<string[]>([]); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);

          
          const extractedCategories: string[] = Array.from(new Set(data.map((product: Products) => product.category) as string[]));
setCategories(extractedCategories);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch products');
      }
    };

    fetchData();
  }, []);

  const handleSearch = (category: string, minPrice: number, maxPrice: number) => {
    const filtered = products.filter(product => {
      return (
        (category ? product.category === category : true) &&
        product.pricing >= minPrice &&
        (maxPrice ? product.pricing <= maxPrice : true)
      );
    });
    setFilteredProducts(filtered);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Your Catalog</h1>
      
      <Search categories={categories} onSearch={handleSearch} />

      <Card productList={filteredProducts.length > 0 ? filteredProducts : products} />
    </>
  );
};

export default CatalogCard;