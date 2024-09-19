import { useState } from "react";
import Header from "../components/Header";
import { RankType } from "../types/RankTypes";

type RatingOverviewProps = {
    rank: RankType,
}

const RatingOverview = ({ rank }: RatingOverviewProps) => {
    const [imageSrc, setImageSrc] = useState(`/ranks/${rank}.png`);

    return <div className="flex flex-col justify-center h-full text-center">
        <Header text="Rating" />
        <img src={imageSrc} className="h-2/3 object-contain" />
        <p className="text-white font-bold uppercase">{rank}</p>
    </div>
}

export default RatingOverview;