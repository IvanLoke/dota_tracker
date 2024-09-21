import React from "react";
import StatsValue from "./statsValue";
import TimbersawImage from "../../public/heroes/Timbersaw.png";
import BasicCard from "./basicCard";

export default function TitleCard() {
  const stats = {
    Matches: "690",
    "Win/ratio": "69/0",
    "Avg K/D/A": "9/1/1",
    GPM: "1000",
    XPM: "1000",
    Rank: "Ancient",
  };

  const stats2 = {
    GPM: "1000",
    XPM: "1000",
    Rank: "Ancient",
  };

  const statEntries = Object.entries(stats);
  const statEntries2 = Object.entries(stats2);

  return (
    <BasicCard
      width={"max-w-5xl"}
      // gradient={"bg-gradient-to-r from-[#181b2a] to-[#0e0f2b]"}
    >
      <div className="flex justify-between w-full">
        <div className="flex flex-col lg:p-4 2xl:pt-6 lg:pl-4 2xl:pl-6">
          <p className="text-white uppercase font-bold text-xl lg:text-2xl 3xl:text-3xl lg:mb-3 3xl:mb-4">
            Top Hero
          </p>
          <div className="flex flex-col items-start border-b border-slate-500 pb-4 mb-8">
            <p
              className="text-red-700 uppercase font-extrabold leading-none text-3xl xl:text-3xl 3xl:text-4xl mb-2"
              style={{ transform: "scaleY(1.3)" }}
            >
              Timbersaw
            </p>
            <p className="text-sm 3xl:text-base font-bold text-slate-300 pt-1 align-middle whitespace-nowrap">
              PLAYED 354H 46M
            </p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {statEntries.map(([statDescription, statValue]) => (
              <StatsValue
                key={statDescription}
                statDescription={statDescription}
                statValue={statValue}
                boldness={""}
                descriptionFontSize={"text-base"}
              />
            ))}
          </div>
        </div>
        <div className="flex 3xl:pr-4 3xl:px-8 3xl:-mt-12">
          <img
            src={TimbersawImage}
            alt="Timbersaw"
            className="lg:ml-4 lg:h-full xl:h-full 2xl:h-[360px] 3xl:h-[450px] 2xl:ml-8 3xl:ml-8 3xl:pb-4"
          />
        </div>
      </div>
    </BasicCard>
  );
}
