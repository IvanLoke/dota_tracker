import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

type GradientStatsProps = {
    color: string,
    twStyles?: string,
    children: React.ReactNode,
}

const GradientStats = ({ color, twStyles, children }: GradientStatsProps): React.JSX.Element => {
    const colorConfig = color.split("-");
    const twColor = fullConfig.theme.colors[colorConfig[0]][Number(colorConfig[1])];

    return <div 
        style={{ background: `linear-gradient(to right, ${twColor}80 0%, ${twColor}00 100%)`, borderLeft: `4px solid ${twColor}` }}
        className={`w-fit h-fit p-3 ${twStyles}`}
    >
        {children}
    </div>
}

export default GradientStats;