interface RealiknLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function RealiknLogo({ className = "", size = "md" }: RealiknLogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        className="w-full h-full"
      >
        {/* 背景圆形 */}
        <rect 
          x="8" 
          y="8" 
          width="84" 
          height="84" 
          rx="20" 
          fill="url(#logoGradient)"
          className="drop-shadow-lg"
        />
        
        {/* 连接符号 - 现代化的链接图标 */}
        <path 
          d="M30 35 L45 35 C52 35 57 40 57 47 C57 54 52 59 45 59 L30 59 M43 35 L58 35 C65 35 70 40 70 47 C70 54 65 59 58 59 L43 59"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
        />
        
        {/* 六边形网格图案表示区块链 */}
        <g opacity="0.3">
          <polygon points="25,25 35,20 45,25 45,35 35,40 25,35" fill="white" />
          <polygon points="45,25 55,20 65,25 65,35 55,40 45,35" fill="white" />
          <polygon points="35,40 45,35 55,40 55,50 45,55 35,50" fill="white" />
        </g>
        
        {/* 数据流动线条 */}
        <path 
          d="M20 70 Q35 65 50 70 T80 70"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
            <stop offset="50%" stopColor="hsl(220, 100%, 60%)" />
            <stop offset="100%" stopColor="hsl(263, 70%, 50%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
