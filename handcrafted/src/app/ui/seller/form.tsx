'use client';
 
import styles from '@/app/ui/seller/form.module.css';
import React, { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';
// import { redirect } from 'next/navigation'
// import { useRouter } from 'next/navigation';
 
interface SellerFormProps {
    sellerName: string;
  }

  interface SellerFormData {
    name: string;
    description: string;
    pricing: number;
    image: string;
    seller: string;
    reviews: Review[]
    category: string;
    material: string;
    sizes: string;
  }

  interface Review {
    username: string;
    rating: number;
    comment: string;
}

 
export const SellerForm: React.FC<SellerFormProps> = ({ sellerName }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [pricing, setPricing] = useState(0);
    const [image, setImage] = useState("");
    const [seller] = useState(sellerName || "seller");
    const [reviews] = useState([]);
    const [category, setCategory] = useState("");
    const [material, setMaterial] = useState("");
    const [sizes, setSizes] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    // const router = useRouter();
 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
 
      const sellerData: SellerFormData = { name, description, pricing, image, seller, reviews, category, material, sizes };
 
      try {
        // send POST request with form data to add the product info into the database
            const response = await axios.post("api/products", { sellerData });
            if (response.status === 200) {
                setShowMessage(true);
            }
            // working on redirection
            // const newproductId = response.data.id;
            // redirect(`/catalog/${newproductId}`);
            // router.push(`/catalog/${newproductId}`);

            // reset field and display success msg
            setName("");
            setDescription("");
            setCategory("");
            setMaterial("");
            setPricing(0);
            setImage("");
            setSizes("");

      } catch (error) {
            console.error('Error submitting product:', error);
      }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
        setShowMessage(false); }, 3000);
        return () => clearTimeout(timeout); }, [showMessage]);

    return (
        <div className={styles.formPage}>
            <fieldset className={styles.productFieldset}>Every field is required
            {showMessage && (
            <div className="success">Product added successfully!</div>
            )}
            <form className={styles.addProductForm}  onSubmit={handleSubmit}>
                    {/* Title of Product */}
                <label htmlFor="name">Product Name: *</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {/* Product Image */}
                <label htmlFor="image">Image of Product: *</label>
                <input 
                    type="text" 
                    name="image" 
                    id="image"
                    placeholder="https://picsum.photos/id/625/400"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                {/* Product Description */}
                <label htmlFor="description">Description: *</label>
                <textarea
                    name="description"
                    id="description"
                    rows={10}
                    cols={50}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                {/* Price of Product */}
                <label htmlFor="price">Price: *</label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    min={1}
                    placeholder="Put in dollar amount"
                    value={pricing}
                    onChange={(e) => setPricing(parseInt(e.target.value))}
                    required
                />
                {/* Category of Product */}
                <label htmlFor="category">Category: *</label>
                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="" disabled>Select a category</option>
                    <option value="Kitchen & Dining">Kitchen & Dining</option>
                    <option value="Home Decor">Home Decor</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Office Supplies">Office Supplies</option>
                    <option value="Bath & Body">Bath & Body</option>
                </select>
                {/* Material of Product */}
                <label htmlFor="material">Material: *</label>
                <input
                    type="text"
                    name="material"
                    id="material"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    required
                    placeholder="What your product is made of..."
                />
                {/* Size of Product */}
                <label htmlFor="size">Size: *</label>
                <input
                    type="text"
                    name="size"
                    id="size"
                    value={sizes}
                    onChange={(e) => setSizes(e.target.value)}
                    required
                    placeholder="Dimensions, Weight, and/or Amount"
                />
                <button type="submit" className={styles.productButton}>Create Product</button>
            </form>
            </fieldset>
        </div>
    );
}

// https://picsum.photos/id/625/400