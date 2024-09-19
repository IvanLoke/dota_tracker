import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

type GradientStatsProps = {
    color: string,
    twStyles?: string,
    borderSide: "l" | "r" | "t" | "b",
    children: React.ReactNode,
}

const GradientStats = ({ color, twStyles, borderSide, children }: GradientStatsProps): React.JSX.Element => {
    const colorConfig = color.split("-");
    const twColor = fullConfig.theme.colors[colorConfig[0]][Number(colorConfig[1])];
    const borderStyle = borderSide === "l" ? { borderLeft: `4px solid ${twColor}` } :
                        borderSide === "r" ? { borderRight: `4px solid ${twColor}` } :
                        borderSide === "t" ? { borderTop: `4px solid ${twColor}` } :
                                            { borderBottom: `4px solid ${twColor}` };
    const gradientDirection =  borderSide === "l" ? 'to right' :
                               borderSide === "r" ? 'to left' :
                               borderSide === "t" ? 'to bottom' :
                                                    'to top';

    return <div 
        style={{ background: `linear-gradient(${gradientDirection}, ${twColor}80 0%, ${twColor}00 100%)`, ...borderStyle }}
        className={`min-w-fit min-h-fit ${twStyles}`}
    >
        {children}
    </div>
}

export default GradientStats;