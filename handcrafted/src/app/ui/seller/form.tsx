'use client';
 
import Link from "next/link";
import styles from '@/app/ui/seller/form.module.css';
import React, { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';
 
interface SellerFormProps {
    productId: string;
  }
 
  interface SellerFormData {
    name: string;
    description: string;
    pricing: number;
    image: string;
    seller: string;
    category: string;
    material: string;
    sizes: string;
  }
 
export const SellerForm: React.FC<SellerFormProps> = ({ productId }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [pricing, setPricing] = useState(0);
    const [image, setImage] = useState("");
    const [seller, setSeller] = useState("");
    const [category, setCategory] = useState("");
    const [material, setMaterial] = useState("");
    const [sizes, setSizes] = useState("");
    const [showMessage, setShowMessage] = useState(false);
 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
 
      const sellerData: SellerFormData = { name, description, pricing, image, seller, category, material, sizes };
 
      try {
        // send PUT request with productId to add the form info in database
        await axios.put(`/api/${productId}`, { id: productId, sellerData });
 
        // reset form fields after successful submission
        setName("");
        setDescription("");
        setPricing(0);
        setImage("");
        setSeller("");
        setCategory("");
        setMaterial("");
        setSizes("");
        setShowMessage(true); // show the message after successful submission
      } catch (error) {
        console.error('Error submitting product:', error);
      }
    };
 
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
 
      return () => clearTimeout(timeout);
    }, [showMessage]);
 
    return (
        <div className={styles.formPage}>
            {showMessage && <p className={styles.success}>Product submitted successfully!</p>}
            <form className={styles.addProductForm} onSubmit={handleSubmit}>
                <fieldset className={styles.productFieldset}>
                    {/* Title of Product */}
                    <label htmlFor="pName">Product Name: *</label>
                    <input
                        type="text"
                        name="pName"
                        id="pName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        aria-describedby="title-error"
                    />
                    <div id="title-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>
 
                    {/* Product Image */}
                    <label htmlFor="pImage">Image of Product:</label>
                    <input type="file"
                            id="pImage"
                            name="pImage"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            aria-describedby="image-error"
                    />
                    <div id="image-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>
 
                    {/* Product Description */}
                    <label htmlFor="pDescription">Description: *</label>
                    <textarea
                        name="pDescription"
                        id="pDescription"
                        rows={10}
                        cols={50}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        aria-describedby="description-error"
                    />
                    <div id="description-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>
 
                    {/* Price of Product */}
                    <label htmlFor="pPrice">Price: *</label>
                    <input
                        type="number"
                        name="pPrice"
                        id="pPrice"
                        placeholder="Put in dollar amount"
                        value={pricing}
                        onChange={(e) => setPricing(parseInt(e.target.value))}
                        required
                        aria-describedby="title-error"
                    />
                    <div id="title-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>
 
                    {/* Seller of Product */}
                    <label htmlFor="pSeller">Seller: *</label>
                    <input
                        type="text"
                        name="pSeller"
                        id="pSeller"
                        placeholder="Name of your company..."
                        value={seller}
                        onChange={(e) => setSeller(e.target.value)}
                        required
                        aria-describedby="seller-error"
                    />
                    <div id="seller-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>
 
                    {/* Category of Product */}
                    <label htmlFor="pCategory">Category: *</label>
                    <select
                        name="pCategory"
                        id="pCategory"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        aria-describedby="category-error"
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="kitchenDining">Kitchen & Dining</option>
                        <option value="homeDecor">Home Decor</option>
                        <option value="officeSupplies">Office Supplies</option>
                        <option value="bathBody">Bath & Body</option>
                    </select>
                    <div id="category-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>
 
                    {/* Material of Product */}
                    <label htmlFor="pMaterial">Material: *</label>
                    <input
                        type="text"
                        name="pMaterial"
                        id="pMaterial"
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        required
                        placeholder="What your product is made of..."
                        aria-describedby="material-error"
                    />
                    <div id="material-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>
 
                    {/* Size of Product */}
                    <label htmlFor="pSize">Size: *</label>
                    <input
                        type="text"
                        name="pSize"
                        id="pSize"
                        value={sizes}
                        onChange={(e) => setSizes(e.target.value)}
                        required
                        placeholder="Dimensions, Weight, and/or Amount"
                        aria-describedby="size-error"
                    />
                    <div id="size-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>
                </fieldset>
                <Link href='/seller'>
                    <button type="submit" className={styles.productButton}>Create Product</button>
                </Link>
            </form>
        </div>
    );
}
