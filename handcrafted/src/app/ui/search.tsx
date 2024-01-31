// search.tsx
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './search.module.css';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
}
