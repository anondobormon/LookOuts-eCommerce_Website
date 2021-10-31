import {
  LocationMarkerIcon,
  MailIcon,
  PhoneOutgoingIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Footer } from "../Home/Footer/Footer";
import { Nav } from "../Navbar/Nav";
import { NewsLatter } from "../Newsletter/NewsLatter";
import { OtherHeader } from "../OtherHeader/OtherHeader";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <>
      <Nav />
      <OtherHeader currentPage={"Contact"} url={"Url"} />
      <div className="max-w-7xl m-auto gap-8 px-4 py-4 md:py-10">
        <h1 className="text-2xl font-semibold mb-4">Contact Information</h1>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          praesentium molestiae consectetur earum quidem pariatur quis soluta
          debitis! Amet ducimus reprehenderit porro dignissimos obcaecati
          corrupti at quasi. Ipsa laudantium iusto quam facilis vel vitae fugiat
          optio corporis expedita dicta nulla excepturi beatae placeat animi,
          illo fugit reiciendis officia quibusdam accusamus unde obcaecati odit
          ipsam nemo! Pariatur ex culpa officiis a doloremque et odio
          exercitationem impedit officia consequuntur optio delectus perferendis
          dicta, ipsa placeat est quaerat voluptas ducimus soluta blanditiis
          esse beatae aperiam sint. Provident sunt maiores illo, vero fugit amet
          saepe accusantium distinctio quam dolor doloribus ut numquam debitis
          nobis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-4">
          <div className="border px-4">
            <div className="py-6 my-4 px-4 border-l-4  items-center border-black flex ">
              <div className="w-10 h-10 mx-4 border-2 flex justify-center items-center border-black rounded-full">
                <LocationMarkerIcon className="w-6" />
              </div>
              <p className="text-lg font-semibold">Chittagong Bangladesh</p>
            </div>
            <div className="py-6 my-4 px-4 border-l-4  items-center border-black flex ">
              <div className="w-10 h-10 mx-4 border-2 flex justify-center items-center border-black rounded-full">
                <PhoneOutgoingIcon className="w-6" />
              </div>
              <p className="text-lg font-semibold">+880124567895</p>
            </div>
            <div className="py-6 my-4 px-4 border-l-4  items-center border-black flex ">
              <div className="w-10 h-10 mx-4 border-2 flex justify-center items-center border-black rounded-full">
                <MailIcon className="w-6" />
              </div>
              <p className="text-lg font-semibold">+abcedef132@mail.com</p>
            </div>
          </div>

          <div className="col-span-2 border">
            <ContactForm />
          </div>
        </div>
      </div>
      <NewsLatter />
      <Footer />
    </>
  );
};
