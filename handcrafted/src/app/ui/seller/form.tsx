'use client';

import Link from "next/link";
// commentend because it breaks vercel deployment if it doesn't exist yet
// import { Button } from "../button";
import { useFormState } from "react-dom";

export default function ProductForm() {
    return (
        <form>
            <fieldset>
                <legend>Fill out to add your product</legend>

                {/* Title of Product */}
                <label htmlFor="pName">Product Name</label>
                <input
                    type="text"
                    name="pName"
                    id="pName"
                    placeholder="Title of product..."
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
                <label htmlFor="pImage">Image of Product</label>
                <input type="file"
                        id="pImage"
                        name="pImage" />
            </fieldset>
        </form>
    );
}