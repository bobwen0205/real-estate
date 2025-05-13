import React from "react";

const Title = ({ title, subtitle, desc }) => {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        {title}{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          {subtitle}
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">{desc}</p>
    </>
  );
};

export default Title;
