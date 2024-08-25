import React from "react";
import { Link } from "react-router-dom";
import img01 from './../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg'
import img02 from './../assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg'
import img03 from './../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg'

const articles = [
  {
    id: 1,
    title: "A UX Case Study Creating a Studious Environment for Students:",
    author: "John Doe",
    date: "Aug 23, 2021",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    imageUrl: img01,
  },
  {
    id: 2,
    title: "A UX Case Study Creating a Studious Environment for Students:",
    author: "John Doe",
    date: "Aug 23, 2021",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    imageUrl: img02,
  },
  {
    id: 3,
    title: "A UX Case Study Creating a Studious Environment for Students:",
    author: "John Doe",
    date: "Aug 23, 2021",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    imageUrl: img03,
  },
];

const WhatToReadNext = () => {
  return (
    <section className="my-12 mr-16 ml-16">
      <h2 className="text-4xl font-bold text-primary mb-20 mt-28">What to read next</h2>
      <Link to='/blog'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article) => (
          <div key={article.id} className="group">
            <img
              className="w-full h-80 object-cover"
              src={article.imageUrl}
              alt={article.title}
            />
            <div className="mt-4">
              <p className="text-sm text-lightGrey font-semibold tracking-wide">
                <p> By
                  <span className="text-secondary"> {article.author}</span> | {article.date}
                </p>{" "} 
              </p>
              <div className="mt-4">
                <h3 className="text-3xl font-bold text-primary leading-10">
                  {article.title}
                </h3>
                <p className="mt-4 leading-7 text-lightGrey">{article.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Link>
    </section>
  );
};

export default WhatToReadNext;
