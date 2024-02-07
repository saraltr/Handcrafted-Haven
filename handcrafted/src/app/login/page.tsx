import { Metadata } from "next";
import Banner from "@/app/ui/banner"
// import bannerImg from "@/public/images/banner2.jpg"
import { LoginButton } from "../ui/loginButton";

export const metadata: Metadata = {
  title: "Login"
};
 
export default function LoginPage() {
  return (
    <main>
      <section className="loginContainer">
        <h2>Use Auth0 to Log In</h2>
        <LoginButton></LoginButton>
      </section>
    </main>
  );
}