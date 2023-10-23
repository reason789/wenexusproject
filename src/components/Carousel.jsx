import React, { useState, useEffect } from "react";

const CardCarousel = ({ cards }) => {
  const [scrollX, setScrollX] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".card-carousel-container");
    if (container) {
      const isOverflowing = container.scrollWidth > container.clientWidth;
      setShowLeftArrow(isOverflowing && scrollX > 0);
      setShowRightArrow(
        isOverflowing && scrollX < container.scrollWidth - container.clientWidth
      );
    }
  }, [scrollX]);

  const handleScroll = (direction) => {
    const cardWidth = 200; // Adjust this to the actual width of your cards

    if (direction === "left") {
      setScrollX(Math.max(scrollX - cardWidth, 0));
    } else if (direction === "right") {
      setScrollX(
        Math.min(scrollX + cardWidth, cards.length * cardWidth - containerWidth)
      );
    }
  };

  return (
    <div className="card-carousel-container">
      <div
        className="card-carousel"
        style={{ transform: `translateX(-${scrollX}px)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="card">
            {card}
          </div>
        ))}
      </div>
      {showLeftArrow && (
        <button onClick={() => handleScroll("left")} className="left-arrow">
          &#9664;
        </button>
      )}
      {showRightArrow && (
        <button onClick={() => handleScroll("right")} className="right-arrow">
          &#9654;
        </button>
      )}
    </div>
  );
};

export default CardCarousel;
