import React from "react";
import mensCollectionImage from "../../assets/mens-collection.jpeg";
import womensCollectionImage from "../../assets/womens-collection.jpeg";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  const collections = [
    {
      title: "Women's Collection",
      image: womensCollectionImage,
      link: "/collections/all?gender=Women",
    },
    {
      title: "Men's Collection",
      image: mensCollectionImage,
      link: "/collections/all?gender=Men",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {collections.map((col, index) => (
          <div
            key={index}
            className="relative flex-1 group overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image */}
            <img
              src={col.image}
              alt={col.title}
              className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-3xl font-bold mb-4 drop-shadow-md">
                {col.title}
              </h2>
              <Link
                to={col.link}
                className="inline-block px-6 py-2 bg-white text-gray-900 font-medium rounded-full shadow hover:bg-gray-200 transition-all duration-300"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenderCollection;
