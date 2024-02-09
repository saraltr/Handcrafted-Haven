import React from "react";
import Image, { StaticImageData } from "next/image";
import Connection from "./connectionButton";

interface BannerProps {
  bannerImage: StaticImageData;
  title?: string;
  subtitle?: string;
  button?: boolean;
  nb1?: string;
  desc1?: string;
  nb2?: string;
  desc2?: string;
}

const Banner: React.FC<BannerProps> = ({ bannerImage, title, subtitle, button, nb1, desc1, nb2, desc2 }) => {
  const hasInfoContent = nb1 || desc1 || nb2 || desc2;

  return (
    <section className="bannerContainer">
      <div className="bannerImg">
        <Image src={bannerImage} alt="Banner Image" />
      </div>
      {title && <h1>{title}</h1>}
      {subtitle && <p className="catchText">{subtitle}</p>}
      {hasInfoContent && (
        <div className="info">
          <div>
            {nb1 && <h2>{nb1}</h2>}
            {desc1 && <p>{desc1}</p>}
          </div>
          <div>
            {nb2 && <h2>{nb2}</h2>}
            {desc2 && <p>{desc2}</p>}
          </div>
        </div>
      )}
      {button && (
        <Connection></Connection>
      )}
    </section>
  );
};

export default Banner;
