import React from "react";
import graphIcon from "../assets/graph.svg";
import trophyIcon from "../assets/trophy.svg";

export default function sidebarIcons() {
  return (
    <div>
      <div className="flex flex-col h-full w-full p-4 justify-evenly">
        <img src={graphIcon} alt="graph" className="w-10 h-10" />
        <img src={trophyIcon} alt="trophy" className="w-10 h-10" />
      </div>
    </div>
  );
}
