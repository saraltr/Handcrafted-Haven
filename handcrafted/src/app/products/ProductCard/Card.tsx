import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

const Card = (props:any) => {
  return (
    <div className={styles.card}>
        <Image src={props.src} alt={props.title} className={styles.cardimage} width={260} height={280}/>
        <h2 className={styles.cardtitle}>{props.title}</h2>
        <span className={styles.carddescription}>{props.description}</span>
    </div>
  )
}

export default Card