import React, { useState } from "react";
import "./CardComponent.css"; // Import CSS

const CardComponent = ({ frontImg, role, description, backInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="card">
        
        <div className="card-front">
          <img src={frontImg} alt="Profile" className="card-image" />
          <h3>{role}</h3>
          <p>{description}</p>
        </div>

        <div className="card-back">
          <h3>More Info</h3>
          <p>{backInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
