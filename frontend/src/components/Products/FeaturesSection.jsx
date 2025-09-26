import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
  const features = [
    {
      icon: <HiShoppingBag className="text-3xl text-white" />,
      title: "FREE INTERNATIONAL SHIPPING",
      desc: "On all orders over $100.00",
      bg: "from-pink-500 to-red-500",
    },
    {
      icon: <HiArrowPathRoundedSquare className="text-3xl text-white" />,
      title: "45 DAYS RETURN",
      desc: "Money back guarantee",
      bg: "from-blue-500 to-indigo-500",
    },
    {
      icon: <HiOutlineCreditCard className="text-3xl text-white" />,
      title: "SECURE CHECKOUT",
      desc: "100% secured checkout process",
      bg: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div
              className={`p-5 rounded-full bg-gradient-to-r ${feature.bg} mb-5 shadow-md`}
            >
              {feature.icon}
            </div>
            <h4 className="font-bold tracking-wide text-gray-900 uppercase mb-3 text-lg">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

