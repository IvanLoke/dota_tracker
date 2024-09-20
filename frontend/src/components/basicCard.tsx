import React from "react";

interface BasicCardProps {
  children: React.ReactNode;
  width: string;
  gradient?: string;
  paddingBottom?: string;
}

const BasicCard: React.FC<BasicCardProps> = ({
  children,
  width,
  gradient,
  paddingBottom,
}) => {
  return (
    <div
      className={`flex ${width} ${gradient} w-full h-full rounded-md ${paddingBottom}`}
    >
      {children}
    </div>
  );
};

export default BasicCard;
