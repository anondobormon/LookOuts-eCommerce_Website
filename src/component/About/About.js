import React from "react";
import FakeData from "../../FakeData.json";
import img from "../../images/About_Icon/creative.png";
import img3 from "../../images/About_Icon/delivery.png";
import img1 from "../../images/About_Icon/express.png";
import img2 from "../../images/About_Icon/real-time.png";
import img4 from "../../images/Sofa1.png";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Navbar/Nav";
import { NewsLatter } from "../Newsletter/NewsLatter";
import { OtherHeader } from "../OtherHeader/OtherHeader";
import { AboutLetter } from "./AboutLetter";
import { Experience } from "./Experience";
import { ExpertTeam } from "./ExpertTeam";
import { ServiceCard } from "./ServiceCard";

export const About = () => {
  const data = FakeData.slice(0, 4);

  return (
    <div className="">
      <Nav />
      <OtherHeader currentPage={"About"} url={"Url"} />
      <AboutLetter img={img4} />
      <Experience />

      <div className="max-w-screen-2xl m-auto gap-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 md:py-10">
        <ServiceCard img={img1} service={"Product Analysis"} />
        <ServiceCard img={img2} service={"Quality Assured"} />
        <ServiceCard img={img3} service={"Fastest Delivery"} />
        <ServiceCard img={img} service={"Creative Always"} />
      </div>

      <div className="bg-gray-100 py-8">
        <h1 className="text-5xl my-2 font-bold text-center">Our Expert Team</h1>
        <p className="text-gray-400 text-center">
          This is our team member of Lookout's
        </p>
        <div className="max-w-screen-2xl m-auto gap-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 md:py-10">
          {data.map((expert) => (
            <ExpertTeam expert={expert} />
          ))}
        </div>
      </div>
      <NewsLatter />
      <Footer />
    </div>
  );
};
