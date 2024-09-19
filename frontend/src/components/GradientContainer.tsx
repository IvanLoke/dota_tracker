import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

type GradientContainerProps = {
    color: string,
    twStyles?: string,
    children: React.ReactNode,
}

const GradientContainer = ({ color, twStyles, children }: GradientContainerProps): React.JSX.Element => {
    const colorConfig = color.split("-");
    const startColor = fullConfig.theme.colors.indigo[950];
    const endColor = fullConfig.theme.colors[colorConfig[0]][Number(colorConfig[1])];

    return <div 
        style={{ background: `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)` }}
        className={`w-full h-full p-8 rounded-lg ${twStyles}`}
    >
        {children}
    </div>
}

export default GradientContainer;