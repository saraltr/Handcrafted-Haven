import { Metadata } from "next";
import Banner from "../ui/banner";
import bannerImg from "../../../public/images/banner2.jpg";


export const metadata: Metadata = {
    title: 'Contact Submitted',
};

export default function Page() {
    return (
        <main>
            <Banner
            bannerImage={bannerImg}
            title="Submission Successful"
            ></Banner>
            <h2>Your concern was successfully submitted.</h2>
            <h2>Our support team will get back to you within 24 hours.</h2>
        </main>
    );
}