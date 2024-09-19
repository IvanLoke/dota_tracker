import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type WinRateProp = {
    winRate: number,
}

const getWinRateColor = (percentage: number) => {
    const r = Math.floor((100 - percentage) * 2.55);
    const g = Math.floor(percentage * 2.55); 
    return `rgb(${r}, ${g}, 50)`;
}

const WinRateComponent = ({ winRate }: WinRateProp) => {
    const winRateColor = getWinRateColor(winRate);

    return <CircularProgressbarWithChildren
        value={Math.round(winRate)}
        styles={buildStyles({
            pathColor: winRateColor,
        })}
    >
        <p className="text-slate-300 text-sm">Win Rate</p>
        <p className="text-white text-3xl font-bold">{winRate.toFixed(1)}%</p>
    </CircularProgressbarWithChildren>
}

export default WinRateComponent;