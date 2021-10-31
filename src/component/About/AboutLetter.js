import React from "react";

export const AboutLetter = ({ img }) => {
  return (
    <div>
      <div className="max-w-screen-2xl m-auto gap-8 px-4 grid grid-cols-1 md:grid-cols-2 py-4 md:py-10">
        <div className="bg-gray-100">
          <img src={img} alt="" />
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
    </div>
  );
};
