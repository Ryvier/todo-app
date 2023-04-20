import React from "react";
import "./TiltingCard.css";

function TiltingCard() {
  return (
    <div className="tilting-card">
      <div className="tilting-card__inner">
        <div className="tilting-card__front">
          <p>Create tasks and make sure to accomplish it be it today or tomorrow until you finish it!</p>
        </div>
        <div className="tilting-card__back">
          <p>Tasks are saved so that you will never forget.</p>
          <p>Modify each task's comment if you made progress!</p>
        </div>
      </div>
    </div>
  );
}

export default TiltingCard;
