/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 20.0,
      yearlyPrice: 240.0,
      description: "Iman semoga kamu bisa menggunakan react dengan aman dan start",
      greenList: "src/assets/images/31.png",
      redList: "src/assets/images/30.png",
    },
    {
      name: "Advance",
      monthlyPrice: 40.0,
      yearlyPrice: 480.0,
      description: "Iman semoga kamu bisa menggunakan react dengan aman dan advance",
      greenList: "src/assets/images/31.png",
      redList: "src/assets/images/30.png",
    },
    {
      name: "Premium",
      monthlyPrice: 60.0,
      yearlyPrice: 720.0,
      description: "Iman semoga kamu bisa menggunakan react dengan aman dan premium",
      greenList: "src/assets/images/31.png",
      redList: null, // No red icon for Premium
    },
  ];

  const getFeatures = (pkg) => {
    switch (pkg.name) {
      case 'Start':
        return [
          { text: 'Videos of Lessons', icon: pkg.greenList },
          { text: 'Homework check', icon: pkg.greenList },
          { text: 'Additional practical tasks', icon: pkg.redList },
          { text: 'Monthly conference', icon: pkg.redList },
          { text: 'Personal advice', icon: pkg.redList },
        ];
      case 'Advance':
        return [
          { text: 'Videos of Lessons', icon: pkg.greenList },
          { text: 'Homework check', icon: pkg.greenList },
          { text: 'Additional practical tasks', icon: pkg.greenList },
          { text: 'Monthly conference', icon: pkg.greenList },
          { text: 'Personal advice', icon: pkg.redList },
        ];
      default:
        return [
          { text: 'Videos of Lessons', icon: pkg.greenList },
          { text: 'Homework check', icon: pkg.greenList },
          { text: 'Additional practical tasks', icon: pkg.greenList },
          { text: 'Monthly conference', icon: pkg.greenList },
          { text: 'Personal advice', icon: pkg.greenList },
        ];
    }
  };

  const renderFeatureList = (pkg) => {
    const features = getFeatures(pkg);

    return (
      <ul className="mt-4 space-y-2 px-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <img className="h-8 md:h-8" src={feature.icon} alt="" />
            {feature.text}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Lorem ipsum dolor sit.
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. asdasjknfkdasnfa
        </p>

        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out">
              <div
                className={`w-7 h-6 rounded-full transition duration-300 ease-in-out ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => {
              setIsYearly(!isYearly);
            }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className={`text-3xl font-bold text-center text-primary}`}>
              {pkg.name}
            </h3>
            <p className="text-tartiary text-center my-5">{pkg.description}</p>
            <p className={`mt-5 text-center text-4xl font-bold`}>
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}{" "}
              <span className="text-base text-tartiary font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            {renderFeatureList(pkg)}
            <div className="w-full mx-auto mt-8 justify-center flex items-center">
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
