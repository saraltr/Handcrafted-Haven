"use client"

import React, { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';
import styles from "@/app/ui/products.module.css"

interface ReviewFormProps {
  productId: string;
}

interface ReviewFormData {
  username: string;
  rating: number;
  comment: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId }) => {
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reviewData: ReviewFormData = { username, rating, comment };

    try {
      // send PUT request with productId to add the review in the reviews array
      await axios.put(`/api/${productId}`, { id: productId, reviewData });
      
      // reset form fields after successful submission
      setUsername("");
      setRating(0);
      setComment("");

      // console.log("it's working!!");
      setShowMessage(true); // show the message after successful submission
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showMessage]);

  return (
    <div className={styles.formContainer}>
      {showMessage && <p className={styles.success}>Review submitted successfully!</p>}
      <h3>Add your review</h3>
      <form id={styles.reviewForm} onSubmit={handleSubmit}>
          <label htmlFor="username">Username*:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="rating">Rating out of 5*:</label>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          />
          <label htmlFor="comment">Review*:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;