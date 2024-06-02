/* eslint-disable no-unused-vars */
import React from "react";
import aboutImg1 from "../assets/images/27.png"
import aboutImg2 from "../assets/images/28.png"

const About = () => {
  return (
      <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 flex justify-center">
            <img className="h-48 md:h-60" src={aboutImg1} alt="" />
          </div>
          <div className="md:w-1/2">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">Lorem ipsum, dolor sit amet consectetur <span className="text-secondary">adipisicing elit.</span></h2>
            <p className="text-tartiary text-lg mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur et cupiditate quibusdam tenetur sed natus tempore maiores? Vel, praesentium dolor!</p>
            <button className="btn-primary ">Get Started</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
          <div className="md:w-1/2 flex justify-center">
            <img className="h-48 md:h-60" src={aboutImg2} alt="" />
          </div>
          <div className="md:w-1/2">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">Lorem ipsum, dolor sit amet consectetur <span className="text-secondary">adipisicing elit.</span></h2>
            <p className="text-tartiary text-lg mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur et cupiditate quibusdam tenetur sed natus tempore maiores? Vel, praesentium dolor!</p>
            <button className="btn-primary ">Get Started</button>
          </div>
        </div>
      </div>
  );
};

export default About;
