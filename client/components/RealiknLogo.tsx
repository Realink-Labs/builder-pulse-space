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
        {/* Outer frame */}
        <rect 
          x="8" 
          y="8" 
          width="84" 
          height="84" 
          rx="16" 
          fill="url(#logoGradient)"
          className="drop-shadow-lg"
        />
        
        {/* Inner chain link symbol */}
        <path 
          d="M25 30 L45 30 C52 30 58 36 58 43 C58 50 52 56 45 56 L35 56 M42 30 L62 30 C69 30 75 36 75 43 C75 50 69 56 62 56 L42 56"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        
        {/* Bottom part of the link */}
        <path 
          d="M35 44 L55 44 C62 44 68 50 68 57 C68 64 62 70 55 70 L25 70 C18 70 12 64 12 57 C12 50 18 44 25 44 L45 44"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        
        {/* Connection accent */}
        <circle cx="50" cy="37" r="2.5" fill="white" opacity="0.8">
          <animate attributeName="opacity" 
            values="0.5;1;0.5" 
            dur="2s" 
            repeatCount="indefinite"/>
        </circle>
        
        <circle cx="50" cy="57" r="2.5" fill="white" opacity="0.8">
          <animate attributeName="opacity" 
            values="1;0.5;1" 
            dur="2s" 
            repeatCount="indefinite"/>
        </circle>
        
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(180, 100%, 70%)">
              <animate attributeName="stop-color" 
                values="hsl(180, 100%, 70%);hsl(190, 100%, 75%);hsl(180, 100%, 70%)" 
                dur="4s" repeatCount="indefinite"/>
            </stop>
            <stop offset="50%" stopColor="hsl(200, 100%, 65%)">
              <animate attributeName="stop-color" 
                values="hsl(200, 100%, 65%);hsl(210, 100%, 70%);hsl(200, 100%, 65%)" 
                dur="4s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="hsl(220, 100%, 60%)">
              <animate attributeName="stop-color" 
                values="hsl(220, 100%, 60%);hsl(230, 100%, 65%);hsl(220, 100%, 60%)" 
                dur="4s" repeatCount="indefinite"/>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
