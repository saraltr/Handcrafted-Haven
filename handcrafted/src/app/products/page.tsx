'use client';
import {useEffect, useState} from 'react';
import styles from './products.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';



// Mock product data or fetch from an API
const mockProducts = [
    {
      id: 1,
      name: 'Handcrafted Wooden Bowl',
      description: 'A beautifully handcrafted wooden bowl.',
      price: '25.00',
      imageUrl: '', 
      material: 'Wood',
      size:  'Medium',
    },
    {
      id: 2,
      name: 'Artisan Ceramic Plate',
      description: 'A unique ceramic plate made by local artisans.',
      price: '30.00',
      imageUrl: '',
      material: 'Wood',
      size:  'Medium',  
    },
    {
        id: 3,
        name: 'Handwoven Basket',
        description: 'A durable and stylish basket, perfect for home storage.',
        price: '45.00',
        imageUrl: '',
        material: 'Rattan',
        size: 'Large',
      },
      {
        id: 4,
        name: 'Vintage Linen Scarf',
        description: 'Elegant and cozy, made from the finest linen.',
        price: '20.00',
        imageUrl: '',
        material: 'Linen',
        size: 'One size',
      },
      {
        id: 5,
        name: 'Rustic Wooden Clock',
        description: 'Adds a touch of elegance to any room, meticulously crafted.',
        price: '60.00',
        imageUrl: '',
        material: 'Wood',
        size: 'Small',
      },
      {
        id: 6,
        name: 'Eco-friendly Yoga Mat',
        description: 'Made from natural materials, providing perfect grip and comfort.',
        price: '35.00',
        imageUrl: '',
        material: 'Natural rubber',
        size: 'Standard',
      },
      {
        id: 7,
        name: 'Leather-bound Journal',
        description: 'Handmade with premium leather, perfect for your thoughts and notes.',
        price: '25.00',
        imageUrl: '',
        material: 'Leather',
        size: 'A5',
      },
      {
        id: 8,
        name: 'Organic Cotton Towels',
        description: 'Soft, absorbent, and environmentally friendly towels for everyday use.',
        price: '40.00',
        imageUrl: '',
        material: 'Organic cotton',
        size: 'Set of 3',
      }
      
  ];


  export default function ProductsPage() {
   
    const [products, setProducts] = useState(mockProducts);

    return (
      <div className={styles.productsContainer}>
        <h1>Our Products</h1>
        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image src={product.imageUrl} alt={product.name} width={200} height={200} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {/* Would add additional products here if needed */}
              <p>Material: {product.material}</p> 
              <p>Size: {product.size}</p> 
              
            </div>
          ))}
        </div>
      </div>
    );
}
