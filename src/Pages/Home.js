import React from "react";
import Timer from "../Components/Timer";
import Task from "../Components/Task";

const Home = () => {
  const tasks = [
    {
      title: "Task Title*",
      description: "Description",
      time: "1/20/2021",
    },
    {
      title: "Task Title*",
      description: "Description",
      time: "1/19/2021",
    },
    {
      title: "Task Title*",
      description: "Description",
      time: "1/18/2021",
    },
  ];
  return (
    <div>
      <div className="header">
        <Timer />
        <div className="nav-btn">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="12.5"
              x2="16"
              y2="12.5"
              stroke="#253147"
              stroke-width="3"
            />
            <line
              y1="7.16666"
              x2="16"
              y2="7.16666"
              stroke="#253147"
              stroke-width="3"
            />
            <line y1="1.5" x2="16" y2="1.5" stroke="#253147" stroke-width="3" />
          </svg>
        </div>
      </div>
      <div className="date">
        <span>Wednesday, January 20th</span>
        <span>12:00 pm</span>
      </div>
      <div className="dropzone">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9.5" cy="9.5" r="8.5" stroke="#BEBEBE" />
          <line x1="9.5" y1="5" x2="9.5" y2="14" stroke="#BEBEBE" />
          <line x1="14" y1="9.5" x2="5" y2="9.5" stroke="#BEBEBE" />
        </svg>
        <span>Add new task</span>
      </div>
      <div className="recent-divider">Recent</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
/* TASK TIMER */
