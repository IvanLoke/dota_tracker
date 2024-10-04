import React from "react";
import StatsValue from "./statsValue";

interface MiniHeroCardProps {
  name: string;
  winRate: string;
  imageUrl: string;
}

const MiniHeroCard: React.FC<MiniHeroCardProps> = ({
  name,
  winRate,
  imageUrl,
}) => {
  return (
    <div className="flex justify-between h-full pl-0 lg:pl-2 xl:pl-0 2xl:pl-4">
      <div className="flex flex-col pt-2 h-full w-auto xl:w-full 2xl:w-auto items-start xl:items-center 2xl:items-start">
        <div className="uppercase font-bold text-slate-200 text-base lg:text-lg xl:text-2xl 2xl:text-xl">
          {name}
        </div>
        <div className="hidden xl:flex 2xl:hidden">
          <img
            src={imageUrl}
            alt={name}
            className="h-[150px] w-auto object-contain"
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-1 mt-4 h-full w-full xl:justify-items-center 2xl:justify-items-start">
          <StatsValue statDescription="Win Ratio" statValue={`${winRate}%`} boldness="font-bold" smallStats/>
          <StatsValue statDescription="Win Ratio" statValue={`${winRate}%`} boldness="font-bold" smallStats/>
        </div>
      </div>
      <div>
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-auto object-contain flex xl:hidden 2xl:flex"
        />
      </div>
    </div>
  );
};

export default MiniHeroCard;
