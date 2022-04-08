import React from "react";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
      <img alt="" width="150" src="/mainlogo.png" />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
