import React from "react";
import StatsValue from "./statsValue";
import TimbersawImage from "../../public/Timbersaw.png";
import BasicCard from "./basicCard";

export default function TitleCard() {
  const stats = {
    Matches: "690",
    "Win/ratio": "69/0",
    "Avg K/D/A": "9/1/1",
  };

  const stats2 = {
    GPM: "1000",
    XPM: "1000",
    Rank: "Ancient",
  };

  const statEntries = Object.entries(stats);
  const statEntries2 = Object.entries(stats2);

  return (
    <BasicCard>
      <div className="flex flex-col pt-6">
        <p className="text-white uppercase font-bold font-xl">Top Agent</p>
        <div className="flex items-center border-b border-slate-500 mt-4 pb-4 mb-8">
          <p className="text-red-700 uppercase font-extrabold text-4xl leading-none ">
            Omen
          </p>
          <p className="text-sm font-bold text-slate-300 ml-4 pt-1 align-middle">
            PLAYED 354H 46M
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {statEntries.map(([statDescription, statValue]) => (
            <StatsValue
              key={statDescription}
              statDescription={statDescription}
              statValue={statValue}
              boldness={""}
              descriptionFontSize={"text-base"}
              valueFontSize={"tex-sm"}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8 mt-6">
          {statEntries2.map(([statDescription, statValue]) => (
            <StatsValue
              key={statDescription}
              statDescription={statDescription}
              statValue={statValue}
              boldness={"font-bold"}
              descriptionFontSize={"text-base"}
              valueFontSize={"text-sm"}
            />
          ))}
        </div>
      </div>
      <div className="text-white flex flex-grow items-start justify-start ml-8 absolute right-4 bottom-5">
        <img src={TimbersawImage} alt="Timbersaw" className="w-80 h-80" />
      </div>
    </BasicCard>
  );
}
