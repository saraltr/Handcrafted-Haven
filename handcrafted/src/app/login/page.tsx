import { Metadata } from "next";
import Banner from "@/app/ui/banner"
import bannerImg from "@/public/images/banner2.jpg"

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
      <div>
        <div>
          <div>
          </div>
        </div>
      </div>
    </main>
  );
}