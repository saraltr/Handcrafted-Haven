import { Metadata } from 'next';
import styles from '../footer.module.css'

export const metadata: Metadata = {
    title: 'Privacy Policy',
  };

export default function PrivacyPage() {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
  
        <h2 className={styles.sectionTitle}>Introduction</h2>
        <p className={styles.paragraph}>At Handcrafted Haven, accessible from https://handcrafted-haven-azure.vercel.app/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Handcrafted Haven and how we use it.</p>
  
        <h2 className={styles.sectionTitle}>Consent</h2>
        <p className={styles.paragraph}>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
  
        <h2 className={styles.sectionTitle}>Information we collect</h2>
        <p className={styles.paragraph}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p className={styles.paragraph}>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
  
        <h2 className={styles.sectionTitle}>How we use your information</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Provide, operate, and maintain our website</li>
          <li className={styles.listItem}>Improve, personalize, and expand our website</li>
          <li className={styles.listItem}>Understand and analyze how you use our website</li>
          <li className={styles.listItem}>Develop new products, services, features, and functionality</li>
          <li className={styles.listItem}>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
        </ul>
      </main>
    );
  }