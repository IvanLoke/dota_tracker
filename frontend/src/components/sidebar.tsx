import React from "react";
import SidebarIcons from "./sidebarIcons";

export default function sidebar() {
  return (
    <div className="w-20 h-screen bg-slate-700 fixed left-0 top-0">
      <div className="h-full flex flex-col items-center">
        <div>
          <img src="/dota.png" alt="dota" className="w-14 h-14 mt-4" />
        </div>
        <div className="mt-15 flex flex-grow-0 flex-shrink-0 h-1/2">
          <SidebarIcons />
        </div>
      </div>
    </div>
  );
}
