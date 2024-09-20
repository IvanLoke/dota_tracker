import Header from "../components/Header";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import WinRateComponent from "../components/WinRate";
import GradientStats from "../components/GradientStats";
import StatsValue from "../components/statsValue";

export interface CompetitiveOverviewProps {
  stats: {
    wins: number;
    loss: number;
    kills: number;
    deaths: number;
    assists: number;
    killParticipation: number;
    gpm: number;
    xpm: number;
  };
}

type StatsKey =
  | "Kills"
  | "Deaths"
  | "Assists"
  | "Kill Participation"
  | "GPM"
  | "XPM";

const CompetitiveOverview = ({
  stats,
}: CompetitiveOverviewProps): React.JSX.Element => {
  const { wins, loss, kills, deaths, assists, killParticipation, gpm, xpm } =
    stats;
  const winRate = (wins / (wins + loss)) * 100;
  const statsObject: Record<StatsKey, number> = {
    Kills: kills,
    Deaths: deaths,
    Assists: assists,
    "Kill Participation": killParticipation,
    GPM: gpm,
    XPM: xpm,
  };

  return (
    <div className="flex flex-col gap-4">
      <Header text="Competitive Overview" />
      <div className="flex items-center gap-16">
        <div className="w-1/6">
          <WinRateComponent winRate={winRate} />
        </div>
        <GradientStats color="teal-400" twStyles="w-1/5 p-3" borderSide="l">
          <p className="text-white font-bold">{wins} WINS</p>
        </GradientStats>
        <GradientStats color="red-500" twStyles="w-1/5 p-3" borderSide="l">
          <p className="text-white font-bold">{loss} LOSSES</p>
        </GradientStats>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(statsObject).map((key, i) => {
          return (
            <GradientStats
              color="cyan-500"
              twStyles="w-5/6 p-2"
              key={`stats${i}`}
              borderSide="l"
            >
              <StatsValue
                statDescription={key}
                statValue={String(statsObject[key as StatsKey])}
                boldness="font-bold"
              />
            </GradientStats>
          );
        })}
      </div>
    </div>
  );
};

export default CompetitiveOverview;
