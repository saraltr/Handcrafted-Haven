import { Metadata } from "next";
import Banner from "@/app/ui/banner"
import bannerImg from "@/public/images/banner2.jpg"
import { LoginButton } from "../ui/loginButton";

export const metadata: Metadata = {
  title: "Register"
};
 
export default function RegisterPage() {
  return (
    <main>
        <Banner
            bannerImage={bannerImg}
            title="Join us"
        >
        </Banner>
      <section>
        <h2>Log In</h2>
        <LoginButton></LoginButton>
      </section>
    </main>
  );
}