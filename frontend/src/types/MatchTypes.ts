import { RankType } from "./RankTypes";

export type SideType = "radiant" | "dire"

export interface MatchType {
    side: SideType;
    radiantScore: number;
    direScore: number;
    radiantWin: boolean;
    kills: number;
    deaths: number;
    assists: number;
    rank: RankType;
    hero: string;
    date: Date;
}
