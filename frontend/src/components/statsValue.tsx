import React from "react";

interface StatsValueProps {
  statDescription: string;
  statValue: string;
  boldness?: string;
  valueFontSize?: string;
}

const StatsValue: React.FC<StatsValueProps> = ({
  statDescription,
  statValue,
  boldness,
  valueFontSize,
}) => {
  return (
    <div className="flex flex-col items-start whitespace-nowrap">
      <div className={`text-slate-300 text-base 3xl:text-lg`}>
        {statDescription}
      </div>
      <div className={`text-white text-lg 3xl:text-xl mt-1 ${boldness}`}>
        {statValue}
      </div>
    </div>
  );
};

export default StatsValue;
