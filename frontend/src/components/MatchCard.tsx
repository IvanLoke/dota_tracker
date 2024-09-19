import { MatchType, SideType } from "../types/MatchTypes";
import GradientStats from "./GradientStats";


type MatchCardProp = {
    details: MatchType
}

type ScoreProps = {
    side: SideType;
    radiantScore: number;
    direScore: number;
}

type KdaProps = {
    kills: number;
    deaths: number;
    assists: number;
}

export const Score = ({ side, radiantScore, direScore }: ScoreProps) => {
    const allyScore = side === "radiant" ? radiantScore : direScore;
    const enemyScore = side === "dire" ? direScore : radiantScore;

    return <div className="flex">
        <p className="text-teal-400">{allyScore}</p>:<p className="text-red-500">{enemyScore}</p>
    </div>
}

export const KDA = ({ kills, deaths, assists }: KdaProps) => {
    return <div className="flex flex-col">
        <p className="text-slate-500">K / D / A</p>
        <p className="text-white">{kills} / {deaths} / {assists}</p>
    </div>
}

const MatchCard = ({ details }: MatchCardProp) => {
    const heroLogo = `/heroes/${details.hero}.png`;
    const rankLogo = `/ranks/${details.rank}.png`
    const color = (details.side === "radiant" && details.radiantWin) || (details.side === "dire" && !details.radiantWin) ? "teal-400" : "red-500";

    return <GradientStats borderSide="r" color={color}>
        <div className="flex items-center text-white h-[120px] justify-between">
            <img src={heroLogo} className="h-[80px]" />
            <div className="flex flex-col">
                <p className="font-bold capitalize">{details.side}</p>
                <Score side={details.side} radiantScore={details.radiantScore} direScore={details.direScore} />
            </div>
            <div className="w-1/4">
                <KDA kills={details.kills} deaths={details.deaths} assists={details.assists} />
            </div>
            <img src={rankLogo} className="h-[80px] pr-4" />
        </div>
    </GradientStats>
}

export default MatchCard;