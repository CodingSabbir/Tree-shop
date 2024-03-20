

import React, { useEffect, useState } from "react";

const BrandMovingCards = ({ items, direction = "right", speed = "slow" }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        direction === "right"
          ? (prevIndex + 1) % items.length
          : (prevIndex - 1 + items.length) % items.length
      );
    }, speed === "slow" ? 2000 : 2000); // Adjust speed here

    return () => clearInterval(interval);
  }, [direction, items.length, speed]);

  return (
    <div className='flex justify-around items-center flex-wrap gpa-4 py-5'>
      {items.map((item, index) => (
        <div
          key={index}
          className={`transition-transform duration-500 ${
            index === currentIndex ? "" : "opacity-50"
          }`}
          style={{
            transform: `scale(${index === currentIndex ? 1.2 : 1})`,
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            className="py-5"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandMovingCards;
