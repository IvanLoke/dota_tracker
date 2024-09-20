import React from "react";

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
    <div className="flex justify-between h-36 pl-4">
      <div className="flex flex-col pt-4 h-full">
        <div className="uppercase font-bold text-slate-200 text-base">
          {name}
        </div>
        <div>
          <div className="text-slate-400 mt-4">Win Ratio</div>
          <div className="text-slate-200 font-extrabold text-base">
            {winRate}%
          </div>
        </div>
      </div>
      <div>
        <img src={imageUrl} alt={name} className="h-[130px]" />
      </div>
    </div>
  );
};

export default MiniHeroCard;
