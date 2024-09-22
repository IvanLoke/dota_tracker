import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import axios from "axios";
import StatsTable from "./components/statsTable";
import TitleCard from "./components/titleCard";
import GradientContainer from "./components/GradientContainer";
import CompetitiveOverview from "./views/CompetitiveOverview";
import { CompetitiveOverviewStats } from "./dummyData/CompetitiveOverviewData";
import RatingOverview from "./views/RatingOverview";
import PreviousMatches from "./views/PreviousMatches";
import { PreviousMatchStats } from "./dummyData/PreviousMatchesData";
import MiniHeroCard from "./components/miniHeroCard";

interface Player {
  account_id: number;
  player_slot: number;
  hero_id: number;
  kills: number;
  deaths: number;
  assists: number;
  last_hits: number;
  denies: number;
  gold_per_min: number;
  xp_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  items: number[];
}

interface Match {
  match_id: number;
  duration: number;
  radiant_win: boolean;
  start_time: number;
  players: Player[];
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

function App() {
  // const BASE_URL = "https://api.opendota.com/api/matches/7887391440";
  // const [matchData, setMatchData] = useState<Match | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // // Function to fetch match stats
  // const getMatchStats = async (): Promise<void> => {
  //   try {
  //     const response = await axios.get<Match>(BASE_URL);
  //     setMatchData(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error("Error fetching match stats:", err);
  //     setError("Failed to fetch match data.");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getMatchStats();
  // }, []);
  const { height, width } = useWindowSize();
  console.log(height, width);
  return (
    <>
      <div className="bg-slate-900 flex flex-col w-full p-4">
        {/* <Sidebar /> */}
        {/* <StatsTable stats={matchData} /> */}
        <div className="h-14 w-full mb-4 text-white">Top Bar Placeholder</div>
        <div className="w-full h-full grid grid-cols-10 auto-rows-auto gap-4">
          <GradientContainer
            color="blue-950"
            twStyles="p-4 col-span-10 md:col-span-7 xl:col-span-5 row-span-2"
          >
            <TitleCard />
          </GradientContainer>
          <div className="col-span-10 grid grid-cols-10 grid-rows-2 row-span-2 gap-4 md:col-span-3 xl:col-span-2">
            <GradientContainer
              color="cyan-500"
              twStyles="p-4 col-span-5 row-span-2 md:col-span-10 md:row-span-1"
            >
              <MiniHeroCard
                name="Timbersaw"
                winRate="60"
                imageUrl="../public/heroes/Timbersaw.png"
              />
            </GradientContainer>
            <GradientContainer
              color="purple-900"
              twStyles="p-4 col-span-5 row-span-2 md:col-span-10 md:row-span-1"
            >
              <MiniHeroCard
                name="Timbersaw"
                winRate="60"
                imageUrl="../public/heroes/Timbersaw.png"
              />
            </GradientContainer>
          </div>
          <GradientContainer
            color="blue-950"
            twStyles="col-span-10 xl:col-span-3 row-span-4"
          >
            <PreviousMatches matches={PreviousMatchStats.matches} />
          </GradientContainer>
          <GradientContainer
            color="blue-950"
            twStyles="p-4 col-span-10 md:col-span-7 xl:col-span-5 row-span-2"
          >
            <CompetitiveOverview stats={CompetitiveOverviewStats.stats} />
          </GradientContainer>
          <GradientContainer
            color="purple-900"
            twStyles="p-4 col-span-5 md:col-span-3 xl:col-span-2 row-span-1"
          >
            <RatingOverview rank="legend" />
          </GradientContainer>
          <GradientContainer
            color="blue-950"
            twStyles="p-4 col-span-5 md:col-span-3 xl:col-span-2 row-span-1"
          >
            IDK
          </GradientContainer>
        </div>
      </div>
    </>
  );
}

export default App;
