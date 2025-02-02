const DonutProgress = ({ 
    percentage = 0,
    size = "w-32 h-32",
    strokeWidth = 4,
    bgColor = "text-gray-200",
    progressColor = "text-blue-500"
  }) => {
    // Ensure percentage is between 0 and 100
    const normalizedPercentage = Math.min(100, Math.max(0, percentage));
    
    // Convert percentage to fraction
    const numerator = ((normalizedPercentage / 100) * 4 );
    
    // Calculate circle properties
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * ((100 - normalizedPercentage) / 100);
  
    return (
      <div className={`relative flex items-center justify-center ${size}`}>
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle 
            cx="40"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className={bgColor}
          />
          
          {/* Progress circle */}
          <circle 
            cx="40"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            className={`${progressColor} transition-all duration-500 ease-in-out`}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        
        {/* Center text showing fraction */}
        <div className=" transform -translate-x-12 text-[16px]  -translate-y-0">
          <div className="flex space-x-1 items-center">
            <span className=" font-medium">{numerator}</span>
            <div className="w-full my-1">/</div>
            <span className=" font-medium">4</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default DonutProgress;