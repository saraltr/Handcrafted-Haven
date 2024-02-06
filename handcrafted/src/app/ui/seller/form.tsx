'use client';

import Link from "next/link";
import styles from '@/app/ui/seller/form.module.css';
//import { useFormState } from "react-dom";

export default function ProductForm() {
    return (
        <div className={styles.formPage}>
            <form className={styles.addProductForm}>
                <fieldset className={styles.productFieldset}>
                    <legend className={styles.productLegend}>Fill out to add your product</legend>

                    {/* Title of Product */}
                    <label htmlFor="pName">Product Name: *</label>
                    <input
                        type="text"
                        name="pName"
                        id="pName"
                        placeholder="Title of product..."
                        required
                        aria-describedby="title-error"
                    />
                    <div id="title-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p className="mt-2 text-small text-red-500" key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>

                    {/* Product Image */}
                    <label htmlFor="pImage">Image of Product:</label>
                    <input type="file"
                            id="pImage"
                            name="pImage"
                            aria-describedby="image-error"
                    />
                    <div id="image-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p className="mt-2 text-small text-red-500" key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>

                    {/* Product Description */}
                    <label htmlFor="pDescription">Product Description: *</label>
                    <textarea
                        name="pDescription"
                        id="pDescription"
                        rows={10}
                        cols={50}
                        required
                        aria-describedby="description-error"
                    />
                    <div id="description-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p className="mt-2 text-small text-red-500" key={error}>
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
                        required
                        aria-describedby="title-error"
                    />
                    <div id="title-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p className="mt-2 text-small text-red-500" key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>

                    {/* Material of Product */}
                    <label htmlFor="pMaterial">Product Material: *</label>
                    <input
                        type="text"
                        name="pMaterial"
                        id="pMaterial"
                        required
                        aria-describedby="material-error"
                    />
                    <div id="material-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p className="mt-2 text-small text-red-500" key={error}>
                                {error}
                            </p>
                            ))}*/}
                    </div>

                    {/* Size of Product */}
                    <label htmlFor="pSize">Product Size: *</label>
                    <input
                        type="text"
                        name="pSize"
                        id="pSize"
                        required
                        aria-describedby="size-error"
                    />
                    <div id="size-error" aria-live="polite" aria-atomic='true'>
                        {/*{state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                            <p className="mt-2 text-small text-red-500" key={error}>
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