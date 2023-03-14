import React, { useState } from "react";
import lesson from "../data/kaboomlesson.json";
import robot from "../assets/robot.png";

export default function Explainer() {
  const [index, setIndex] = useState(0);

  function onNext() {
    if (index < lesson.data.slides.length - 1) setIndex(index + 1);
  }
  function onBack() {
    if (index > 0) setIndex(index - 1);
  }

  return (
    <div className="ExplainerContainer">
      <div className="teacherContainer">
        <img className="teacherLogo" src={robot} />
        <div className="teacherName">Kaboom-Bot</div>
      </div>
      <div className="chatContainer">
        <div
          className="chat"
          dangerouslySetInnerHTML={{ __html: lesson.data.slides[index] }}
        ></div>
      </div>
      <div className="pagination">
        <div className="button next" onClick={onBack}>
          Back
        </div>
        <div className="button back" onClick={onNext}>
          Next
        </div>
      </div>
    </div>
  );
}
