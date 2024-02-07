// Search.tsx (Updated with price filtering)
'use client';
import React, { useState } from 'react';

interface SearchProps {
  categories: string[];
  onSearch: (category: string, minPrice: number, maxPrice: number) => void;
}

const Search: React.FC<SearchProps> = ({ categories, onSearch }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(category, Number(minPrice) || 0, Number(maxPrice) || Infinity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
