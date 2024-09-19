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
    <div className="flex flex-col items-start">
      <div className={`text-slate-300 ${descriptionFontSize}`}>
        {statDescription}
      </div>
      <div className={`text-white mt-1 ${boldness} ${valueFontSize}`}>
        {statValue}
      </div>
    </div>
  );
};

export default StatsValue;
