import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
  };

export default function PrivacyPage() {
    return (
        <main>
            <h1>Privacy Policy</h1>

        

            <h2>Introduction</h2>
            <p>At Handcrafted Haven, accessible from [will replace with actual URL when deployed], one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Handcrafted Haven and how we use it.</p>

            <h2>Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

            <h2>Information we collect</h2>
            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
            <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>

            <h2>How we use your information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            
            </ul>
        </main>
    );
}