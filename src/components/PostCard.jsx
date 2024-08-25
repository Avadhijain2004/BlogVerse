import React from 'react';

function PostCard({ title, date }) {
  return (
    <div className="bg-light p-4 rounded shadow-md">
      <h3 className="text-primary font-heading text-xl">{title}</h3>
      <p className="text-lightGrey mt-2">{date}</p>
      <button className="text-accent mt-4">Read More</button>
    </div>
  );
}

export default PostCard;
