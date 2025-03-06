interface GradientBoxProps {
  className?: string;
  children: React.ReactNode;
}

export default function GradientBox({ className, children }: GradientBoxProps) {
  return (
    <div className={`from-[#FFF] to-[#00D1AB] ${className}`}>{children}</div>
  );
}
