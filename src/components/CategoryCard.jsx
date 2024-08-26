import React from 'react';
import icon03 from './../assets/Client-First - icons/icon.svg';
import icon02 from './../assets/icon2.png';
import icon01 from './../assets/Client-First - icons/Icon-1.svg';
import icon04 from './../assets/Client-First - icons/business-and-trade 1.svg';

const categories = [
  {
    title: "Business",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    icon: icon01,
  },
  {
    title: "Startup",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    icon: icon02,
  },
  {
    title: "Economy",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    icon: icon03,
  },
  {
    title: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    icon: icon04,
  },
];

const CategoryCard = ({ title }) => {
  return (
    <div className="text-center py-12 md:py-16 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 heading text-primary font-heading">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="md:w-full md:h-60 h-52 p-6 md:p-10 border bg-white hover:bg-yellow-300 shadow-md transition-colors duration-300"
          >
            <img
              className="border border-offWhite bg-cream rounded w-12 h-12"
              src={category.icon}
              alt={category.title}
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2 heading mt-4">
              {category.title}
            </h3>
            <p className="text-lightGrey text-sm md:text-base">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
