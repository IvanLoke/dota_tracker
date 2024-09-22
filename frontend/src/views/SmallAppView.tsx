import React from "react";
import TitleCard from "../components/titleCard";
import GradientContainer from "../components/GradientContainer";
import CompetitiveOverview from "./CompetitiveOverview";
import { CompetitiveOverviewStats } from "../dummyData/CompetitiveOverviewData";
import RatingOverview from "./RatingOverview";
import PreviousMatches from "./PreviousMatches";
import { PreviousMatchStats } from "../dummyData/PreviousMatchesData";
import MiniHeroCard from "../components/miniHeroCard";

export default function SmallAppView() {
  return (
    <div>
      <div className="bg-slate-900 flex flex-col w-screen p-4">
        {/* <Sidebar /> */}
        {/* <StatsTable stats={matchData} /> */}
        <div className="h-14 w-full mb-4 text-white">Top Bar Placeholder</div>
        <div className="w-full h-full grid grid-cols-10 auto-rows-auto gap-4">
          <GradientContainer
            color="blue-950"
            twStyles="p-4 col-span-10 row-span-1"
          >
            <TitleCard />
          </GradientContainer>
          <GradientContainer
            color="cyan-500"
            twStyles="p-4 col-span-5 row-span-2"
          >
            <MiniHeroCard
              name="Timbersaw"
              winRate="60"
              imageUrl="../public/heroes/Timbersaw.png"
            />
          </GradientContainer>
          <GradientContainer
            color="purple-900"
            twStyles="p-4 col-span-5 row-span-2"
          >
            <MiniHeroCard
              name="Timbersaw"
              winRate="60"
              imageUrl="../public/heroes/Timbersaw.png"
            />
          </GradientContainer>
          <GradientContainer
            color="blue-950"
            twStyles="p-4 col-span-10 row-span-2"
          >
            <CompetitiveOverview stats={CompetitiveOverviewStats.stats} />
          </GradientContainer>
          <GradientContainer
            color="purple-900"
            twStyles="p-4 col-span-5 row-span-1"
          >
            <RatingOverview rank="legend" />
          </GradientContainer>
          <GradientContainer
            color="blue-950"
            twStyles="p-4 col-span-5 row-span-1"
          >
            IDK
          </GradientContainer>
          <GradientContainer color="blue-950" twStyles="col-span-10 row-span-4">
            <PreviousMatches matches={PreviousMatchStats.matches} />
          </GradientContainer>
        </div>
      </div>
    </div>
  );
}
