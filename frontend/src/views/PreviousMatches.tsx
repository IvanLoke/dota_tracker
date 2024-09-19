import Header from "../components/Header";
import MatchCard from "../components/MatchCard";
import { MatchType } from "../types/MatchTypes";

export type PreviousMatchesProp = {
    matches: MatchType[]
}

const splitMatchesUsingDate = (matches: MatchType[]) => {
    const splitMatches = new Map<string, MatchType[]>();
    matches.forEach(match => {
        const dateString = match.date.toISOString();
        if (splitMatches.has(dateString)) {
            splitMatches.get(dateString)?.push(match);
        } else {
            splitMatches.set(dateString, [match]);
        }
    });

    splitMatches.forEach(matchesArray => {
        matchesArray.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    });

    return splitMatches;
}

const isToday = (date: Date) => {
    const today = new Date();
  
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { day: '2-digit', month: 'long' });
}

const PreviousMatches = ({ matches }: PreviousMatchesProp) => {
    const splitMatches = splitMatchesUsingDate(matches);

    return <div className="flex flex-col h-full overflow-scroll">
        <div className="p-8 flex justify-between">
            <Header text="Last Match" />
            <p className="text-slate-500">View All Matches</p>
        </div>
        <div className="pl-8">
            {Array.from(splitMatches.entries()).map(([dateString, matches]) => {
                const date = new Date(dateString);

                return <div key={dateString} className="w-full mb-4">
                    <p className="text-white font-bold uppercase mb-4">{isToday(date) ? "Today" : formatDate(date)}</p>
                    {matches.map((match, i) => {
                        return <MatchCard details={match} key={dateString + i} />
                    })}
                </div>
            })}
        </div>
    </div>
}

export default PreviousMatches;