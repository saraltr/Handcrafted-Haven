import { Metadata } from "next";
import Banner from "@/app/ui/banner"
import bannerImg from "@/public/images/banner2.jpg"
import { LoginButton } from "../ui/loginButton";

export const metadata: Metadata = {
  title: "Login"
};
 
export default function LoginPage() {
  return (
    <main>
        <Banner
            bannerImage={bannerImg}
            title="Join us"
        >
        </Banner>
      <section className="loginContainer">
        <h2>Use Auth0 or Github to Log In</h2>
        <LoginButton></LoginButton>
      </section>
    </main>
  );
}