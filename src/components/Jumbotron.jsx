/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/images/33.png";
import Banner from "../shared/banner";

export default function Jumbotron() {
  return (
    <div className="md:px-12  p-4 max-w-screen-2xl mx-auto mt-24" id="home">
        <Banner banner={banner} heading={"Lorem ipsum dolor sit amet consectetur"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias exercitationem deleniti reprehenderit error consequuntur est mollitia labore ipsam minus! Eius!"} btn1={"Get Started"} btn2={"Fuck You"}/>
    </div>
    
    
  );
}
