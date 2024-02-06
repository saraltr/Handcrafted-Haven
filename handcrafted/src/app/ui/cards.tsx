"use client"

import Link from "next/link";
import styles from "@/app/ui/cards.module.css";
import Image from "next/image";
import React, { FC } from 'react';
// import { trpc } from "../../../utils/trpc";
// import { Product } from "@prisma/client";

interface Products {
  id: string;
  name: string;
  image: string;
  pricing: number;
}

interface CardHolderProps {
  productList: Products[];
}

export default function CardHolder() {

  // const { data: productList} = trpc.findAllProducts.useQuery();

    return (
        <>
        <div className={styles.outline}>
        </div>
        <p className={styles.linkInfo}>** Click on the title to see more information about the product. **</p>
        </>
    );
}

export const Card: FC<CardHolderProps> = ({ productList }) => {
    return (
      <section>
        {productList.map(({ id, name, image }) => (
        <div key={id} className={styles.cards}>
            <Link
                href={`/app/product/${id}?product=${name}`}>
                <h3 className={styles.cardHeader}>{name}</h3>
            </Link>
            <div className={`${styles.cardImageOutline} items-center`}>
                <Image
                    src={image}
                    alt={name }
                    className={styles.cardImage}
                    width={200}
                    height={200}/>
            </div>
            <p className={`${styles.cardPrice}`}>{`Price: $${pricing}`}</p>
        </div>
        ))}
      </section>
    );
};