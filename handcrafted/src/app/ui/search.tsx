"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './search.module.css';

export default function Search() {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?category=${encodeURIComponent(category)}&minPrice=${encodeURIComponent(minPrice)}&maxPrice=${encodeURIComponent(maxPrice)}`);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchContainer}>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="">Select Category</option>
        {/* Populate these options later when products are available */}
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className={styles.priceInput}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className={styles.priceInput}
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
}
