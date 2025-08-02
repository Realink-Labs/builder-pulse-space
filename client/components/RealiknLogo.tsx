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
    <div className={`${sizeClasses[size]} ${className} logo-glow`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        className="w-full h-full transition-all duration-300 hover:scale-110"
      >
        {/* Main container with smooth rounded corners */}
        <rect 
          x="5" 
          y="5" 
          width="90" 
          height="90" 
          rx="24" 
          fill="url(#logoGradient)"
          className="drop-shadow-lg"
        />
        
        {/* Web2 representation - Traditional square */}
        <rect 
          x="15" 
          y="25" 
          width="25" 
          height="25" 
          rx="4"
          fill="white"
          opacity="0.9"
        />
        
        {/* Web3 representation - Hexagonal shape */}
        <polygon 
          points="75,20 85,30 85,45 75,55 65,45 65,30" 
          fill="white"
          opacity="0.9"
        />
        
        {/* Smooth connection bridge - flowing curve representing RWA flow */}
        <path 
          d="M42 37.5 C50 35, 58 35, 63 37.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        >
          <animate attributeName="opacity" 
            values="0.5;1;0.5" 
            dur="2s" 
            repeatCount="indefinite"/>
        </path>
        
        {/* Data flow particles */}
        <circle r="2" fill="white" opacity="0.8">
          <animateMotion dur="3s" repeatCount="indefinite">
            <path d="M42 37.5 C50 35, 58 35, 63 37.5"/>
          </animateMotion>
          <animate attributeName="opacity" 
            values="0;1;0" 
            dur="3s" 
            repeatCount="indefinite"/>
        </circle>
        
        <circle r="1.5" fill="white" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
            <path d="M42 37.5 C50 35, 58 35, 63 37.5"/>
          </animateMotion>
          <animate attributeName="opacity" 
            values="0;1;0" 
            dur="3s" 
            repeatCount="indefinite" 
            begin="0.5s"/>
        </circle>
        
        {/* Bottom flow - representing asset tokenization */}
        <path 
          d="M25 55 C35 60, 45 60, 55 55 C65 50, 70 50, 75 55"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
          strokeDasharray="4,2"
        >
          <animate attributeName="stroke-dashoffset" 
            values="0;12" 
            dur="2s" 
            repeatCount="indefinite"/>
        </path>
        
        {/* RWA symbol - representing real world assets */}
        <circle cx="27.5" cy="37.5" r="3" fill="rgba(255,255,255,0.4)" />
        <circle cx="75" cy="37.5" r="3" fill="rgba(255,255,255,0.4)" />
        
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(180, 100%, 50%)">
              <animate attributeName="stop-color" 
                values="hsl(180, 100%, 50%);hsl(190, 100%, 55%);hsl(180, 100%, 50%)" 
                dur="4s" repeatCount="indefinite"/>
            </stop>
            <stop offset="50%" stopColor="hsl(200, 100%, 60%)">
              <animate attributeName="stop-color" 
                values="hsl(200, 100%, 60%);hsl(220, 100%, 65%);hsl(200, 100%, 60%)" 
                dur="4s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="hsl(240, 85%, 55%)">
              <animate attributeName="stop-color" 
                values="hsl(240, 85%, 55%);hsl(250, 90%, 60%);hsl(240, 85%, 55%)" 
                dur="4s" repeatCount="indefinite"/>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
