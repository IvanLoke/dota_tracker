import React from "react";

interface StatsValueProps {
  statDescription: string;
  statValue: string;
  boldness?: string;
  valueFontSize?: string;
  smallStats?: boolean;
}

const StatsValue: React.FC<StatsValueProps> = ({
  statDescription,
  statValue,
  boldness,
  valueFontSize,
  smallStats,
}) => {
  return (
    <div className="flex flex-col items-start whitespace-nowrap">
      <div className={`text-slate-300 ${smallStats?'text-xs sm:text-base':''} lg:text-base 2xl:text-lg`}>
        {statDescription}
      </div>
      <div className={`text-white ${smallStats?'text-base sm:text-lg':''} lg:text-lg 3xl:text-xl mt-1 ${boldness}`}>
        {statValue}
      </div>
    </div>
  );
};

export default StatsValue;
