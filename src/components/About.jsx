import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <Title
        title="About"
        subtitle="Our Brand"
        desc="Passionate About Properties, Dedicated to Your Vision"
      />
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="brand"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-500">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            With over a decade of experience, we take pride in building
            exceptional spaces that blend innovation, quality, and
            sustainability—designed to meet the evolving needs of modern living.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded mx-auto">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
