import React from "react";

interface BasicCardProps {
  children: React.ReactNode;
}

const BasicCard: React.FC<BasicCardProps> = ({ children }) => {
  return (
    <div className="flex max-w-2xl bg-gradient-to-r from-[#181b2a] to-[#0e0f2b] rounded-md pl-6 pb-8 relative">
      {children}
    </div>
  );
};

export default BasicCard;
