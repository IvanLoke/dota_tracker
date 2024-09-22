import { useEffect, useState } from "react";
import ExtraLargeAppView from "./views/ExtraLargeAppView";
import LargeAppView from "./views/LargeAppView";
import SmallAppView from "./views/SmallAppView";

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
      <div className="hidden xl:flex">
        <ExtraLargeAppView />
      </div>
      <div className="hidden md:flex xl:hidden">
        <LargeAppView />
      </div>
      <div className="flex md:hidden">
        <SmallAppView />
      </div>
    </>
  );
}

export default App;
