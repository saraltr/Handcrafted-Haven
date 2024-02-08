import { Metadata } from "next";
import Banner from "../ui/banner";
import bannerImg from "../../../public/images/banner2.jpg";
import styles from "@/app/ui/contacts/contacts.module.css";
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact',
};

export default function Page() {
    return (
        <main>
            <Banner
            bannerImage={bannerImg}
            title="Contact Us"
            ></Banner>
            <div className={styles.contactPage}>
                <h1>Get In Touch With Us</h1>
                <h2>Contact our customer service team 24/7</h2>
                <form className={styles.contactForm}>
                    <fieldset className={styles.contactFieldset}>
                        <label htmlFor="firstName">First Name: *</label>
                        <input type="text" id="firstName" name="firstName" required />
                        <label htmlFor="lastName">Last Name: *</label>
                        <input type="text" id="lastName" name="lastName" required />
                        <label htmlFor="contactEmail">Email: *</label>
                        <input type="email" id="contactEmail" name="contactEmail" placeholder="johndoe@gmail.com" required />
                        <label htmlFor="concern">Concern: *</label>
                        <textarea id="concern" name="concern" rows={10} cols={50} required/>
                    </fieldset>
                    <Link href="/success">
                        <button type="submit" className={styles.contactButton}>Send Concern</button>
                    </Link>
                </form>
                <section className={styles.contactSection}>
                    <div className={styles.contactSection2}>
                        <div className={styles.contactCard}>
                            <h2>Handcrafted Haven General Contact Information</h2>
                            <h3>Address</h3>
                            <p>3303 S Rural Road</p>
                            <p>Tempe, Arizona, United States 85282</p>
                            <hr />
                            <h3>Email</h3>
                            <p>handcraftedhaven@gmail.com</p>
                            <hr />
                            <h3>Phone Number</h3>
                            <h4>Toll Free From United States or Canada</h4>
                            <p>1(888)567-9802</p>
                            <h4>Outside United States and Canada</h4>
                            <p>1(271)438-9705</p>
                            <hr />
                            <h3>Google Map</h3>
                            <Link className={styles.googleLink} href='https://maps.app.goo.gl/gqHfRqXpTMnTKieH6'>Google Map Link</Link>
                            <iframe className={styles.googleMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.1884511675553!2d-111.92846142485187!3d33.392247352292344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0898db93d3fb%3A0x1e80446fa850822f!2s3303%20S%20Rural%20Rd%2C%20Tempe%2C%20AZ%2085282!5e0!3m2!1sen!2sus!4v1707170448602!5m2!1sen!2sus" width="400" height="300" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}