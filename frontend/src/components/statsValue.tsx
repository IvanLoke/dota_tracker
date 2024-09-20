import React from "react";

interface StatsValueProps {
  statDescription: string;
  statValue: string;
  boldness?: string;
  descriptionFontSize?: string;
  valueFontSize?: string;
}

const StatsValue: React.FC<StatsValueProps> = ({
  statDescription,
  statValue,
  boldness,
  descriptionFontSize,
  valueFontSize,
}) => {
  return (
    <div className="flex flex-col items-start whitespace-nowrap">
      <div className={`text-slate-300 text-lg 3xl:text-xl ${descriptionFontSize}`}>
        {statDescription}
      </div>
      <div className={`text-white text-base 3xl:text-xl mt-1 ${boldness}`}>
        {statValue}
      </div>
    </div>
  );
};

export default StatsValue;
