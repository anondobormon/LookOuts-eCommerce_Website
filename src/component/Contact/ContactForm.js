import React from "react";

export const ContactForm = () => {
  return (
    <form className="px-4 my-2" action="">
      <h1 className="text-2xl font-bold">Get In Touch</h1>
      <div className="grid grid-cols-1 my-2 md:grid-cols-2 gap-4">
        <input
          type="text"
          id="name"
          name="name"
          className="border-2 my-3 border-black p-2 w-full"
          placeholder="Name"
        />
        <input
          type="email"
          id="email"
          name="email"
          className="border-2 my-3 border-black p-2 w-full"
          placeholder="Email"
        />
        <div className="col-span-2">
          <input
            type="text"
            id="subject"
            name="subject"
            className="border-2 my-3 border-black p-2 w-full"
            placeholder="Subject"
          />
        </div>
        <div className="col-span-2">
          <textarea
            name="message"
            id="message"
            className="w-full h-32 border-2 border-black p-6"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="w-36 py-2 bg-black text-white">
          Send
        </button>
      </div>
    </form>
  );
};
