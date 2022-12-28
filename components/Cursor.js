import React from "react";

const Cursor = () => {
  const { useEffect, useState } = React;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="cursor"
      ></div>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="cursor-follower"
      ></div>
    </div>
  );
};

export default Cursor;
