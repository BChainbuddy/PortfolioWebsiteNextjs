import { style } from "framer-motion/client";

interface GradientBoxProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function GradientBox({
  className,
  children,
  style,
}: GradientBoxProps) {
  return (
    <div className={`from-[#FFF] to-[#00D1AB] ${className}`} style={style}>
      {children}
    </div>
  );
}
