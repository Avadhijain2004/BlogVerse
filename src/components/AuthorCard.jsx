import React from 'react';

function AuthorCard({ name, title, imgSrc }) {
  return (
    <div className="text-center">
      <img src={imgSrc} alt={name} className="mx-auto rounded-full w-32 h-32" />
      <h3 className="mt-4 text-primary font-heading text-xl">{name}</h3>
      <p className="text-lightGrey">{title}</p>
    </div>
  );
}

export default AuthorCard;
