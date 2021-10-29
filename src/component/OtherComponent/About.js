import React from "react";
import FakeData from "../../FakeData.json";
import img from "../../images/About_Icon/creative.png";
import img3 from "../../images/About_Icon/delivery.png";
import img1 from "../../images/About_Icon/express.png";
import img2 from "../../images/About_Icon/real-time.png";
import img4 from "../../images/Sofa1.png";
import { Footer } from "../Home/Footer/Footer";
import { ExpertTeam } from "./ExpertTeam";
import { OtherHeader } from "./OtherHeader";

export const About = () => {
  const data = FakeData.slice(0, 4);

  return (
    <div className="">
      <OtherHeader currentPage={"About"} url={"Url"} />
      <div className="max-w-screen-2xl m-auto gap-8 px-4 grid grid-cols-1 md:grid-cols-2 py-4 md:py-10">
        <div className="bg-gray-100">
          <img src={img4} alt="" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold">ABOUT OUR LOOKOUT'S SHOP</h1>
          <p className="text-2xl mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            enim quisquam aspernatur aperiam.
          </p>
          <p className="text-lg mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis deserunt, molestias quos pariatur voluptatibus
            voluptatum dignissimos adipisci, voluptas fugiat reprehenderit est
            repudiandae maxime, necessitatibus recusandae quis blanditiis quae
            vitae soluta enim ipsum quia sapiente deleniti! Quam in consequatur
            quaerat, ratione, non ea necessitatibus fugiat, doloremque voluptate
            quis totam mollitia cupiditate impedit qui unde porro minus labore
            beatae obcaecati eveniet fugit. Ipsa, placeat provident excepturi
            eaque ea ullam laudantium quibusdam culpa incidunt voluptates
            accusantium aspernatur esse, mollitia iste reprehenderit. Id sequi
            delectus quia voluptate est quasi natus incidunt pariatur
            consectetur excepturi! Explicabo non autem eum error animi omnis rem
            facere exercitatione Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nemo at corporis aperiam magnam molestias
            architecto sit reiciendis dolore qui voluptatibus? Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Et ab consequuntur
            architecto veritatis? Dignissimos exercitationem rerum, nam aut sed
            vel, itaque alias culpa nobis facilis quas, voluptas saepe iure
            expedita?
          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-4 md:py-10">
        <div className="max-w-screen-2xl m-auto gap-8 px-4 grid grid-cols-1 md:grid-cols-2 py-4 md:py-10">
          <div className="">
            <p className="text-3xl font-semibold mt-3">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <p className="text-base text-gray-500  mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              tempora corporis itaque amet? A cum quis aspernatur fuga odio
              consequatur!
            </p>
            <p className="text-base text-gray-500 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              tempora corporis itaque amet? A cum quis aspernatur fuga odio
              consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Quibusdam, enim, cum sit eum a incidunt amet explicabo quas
              totam impedit ipsam laudantium reiciendis iure culpa neque
              obcaecati error dicta! Quam!
            </p>
          </div>
          <div className="py-6">
            <div className="w-full opacity-70 my-4 flex items-center justify-between h-10 bg-yellow-400 rounded-md text-right overflow-hidden font-bold">
              <p className="h-full text-white w-32 flex items-center px-8 bg-yellow-600">
                UI/UX
              </p>
              <p className="  h-full flex items-center text-right pl-12 pr-1 bg-gray-200">
                80%
              </p>
            </div>
            <div className="w-full my-4 flex opacity-70 items-center justify-between h-10 bg-yellow-400 rounded-md text-right overflow-hidden font-bold">
              <p className="text-white w-32 h-full flex items-center px-8 bg-yellow-600">
                BACKEND
              </p>
              <p className="h-full flex items-center text-right pl-40 pr-1 bg-gray-200">
                60%
              </p>
            </div>
            <div className="w-full my-4 flex items-center  opacity-70 justify-between h-10 bg-yellow-400 rounded-md text-right overflow-hidden font-bold">
              <p className="text-white w-32 h-full flex items-center px-8 bg-yellow-600">
                FRONTEND
              </p>
              <p className="h-full flex items-center text-right pl-20 pr-1 bg-gray-200">
                70%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl m-auto gap-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 md:py-10">
        <div className="border-2 rounded-md text-center py-4 px-4">
          <img className="w-36 m-auto" src={img} alt="" />
          <p className="font-semibold py-2 text-xl">Creative Always</p>
          <p className="my-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in!
          </p>
        </div>
        <div className="border-2 rounded-md text-center py-4 px-4">
          <img className="w-36 m-auto" src={img1} alt="" />
          <p className="font-semibold py-2 text-xl">Product Analysis</p>
          <p className="my-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in!
          </p>
        </div>
        <div className="border-2 rounded-md text-center py-4 px-4">
          <img className="w-36 m-auto" src={img2} alt="" />
          <p className="font-semibold py-2 text-xl">Quality Assured</p>
          <p className="my-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in!
          </p>
        </div>
        <div className="border-2 rounded-md text-center py-4 px-4">
          <img className="w-36 m-auto" src={img3} alt="" />
          <p className="font-semibold py-2 text-xl">Fastet Delivery</p>
          <p className="my-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in!
          </p>
        </div>
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
      <Footer />
    </div>
  );
};
