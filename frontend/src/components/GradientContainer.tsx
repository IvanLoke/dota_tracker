import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

type GradientContainerProps = {
  color: string;
  twStyles?: string;
  children: React.ReactNode;
  startHex?: string;
};

const GradientContainer = ({
  color,
  twStyles,
  children,
  startHex,
}: GradientContainerProps): React.JSX.Element => {
  const colorConfig = color.split("-");
  const startColor = startHex ? startHex : fullConfig.theme.colors.indigo[950];
  const endColor = startHex
    ? color
    : fullConfig.theme.colors[colorConfig[0]][Number(colorConfig[1])];


  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${startColor} 40%, ${endColor} 100%)`,
      }}
      className={`w-full h-full min-h-full rounded-lg ${twStyles}`}
    >
      {children}
    </div>
  );
};

export default GradientContainer;
