import React from "react";
import Meow from "./Meow";

const Timeline = ({ meows }) => {
  return (
    <div className="Timeline">
      {meows.map((meow, index) => {
        return <Meow key={index} {...meow} />;
      })}
    </div>
  );
};

export default Timeline;
