import React from "react";

const Task = ({ task }) => {
  const { title, description, time } = task ?? {};
  return (
    <div className="task">
      <div>
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
      <div>
        <span className="time">{time}</span>
        <svg
          width="9"
          height="27"
          viewBox="0 0 9 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 13.5L0 0.942631L0 26.0574L9 13.5Z" fill="#9AB1DD" />
        </svg>
      </div>
    </div>
  );
};

export default Task;
