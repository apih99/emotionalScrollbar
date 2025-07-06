import React from 'react'

const EmotionalFace = ({ emotion, intensity, scrollPercentage }) => {
  // Calculate eye positions and shapes
  const getEyeHeight = () => {
    if (emotion === 'happy') return 5 + (intensity * 10)
    if (emotion === 'sad') return 15 - (intensity * 10)
    return 10
  }
  
  // Calculate mouth path based on emotion
  const getMouthPath = () => {
    const centerX = 150
    const centerY = 180
    
    if (emotion === 'happy') {
      const curve = 20 + (intensity * 30)
      return `M ${centerX - 40} ${centerY} Q ${centerX} ${centerY + curve} ${centerX + 40} ${centerY}`
    } else if (emotion === 'sad') {
      const curve = 20 + (intensity * 30)
      return `M ${centerX - 40} ${centerY + 20} Q ${centerX} ${centerY - curve} ${centerX + 40} ${centerY + 20}`
    }
    return `M ${centerX - 30} ${centerY + 10} L ${centerX + 30} ${centerY + 10}`
  }
  
  // Calculate face color based on emotion
  const getFaceColor = () => {
    if (emotion === 'happy') return '#FFD700'
    if (emotion === 'sad') return '#87CEEB'
    return '#FFA500'
  }
  
  // Calculate eyebrow rotation
  const getEyebrowRotation = () => {
    if (emotion === 'happy') return -15 * intensity
    if (emotion === 'sad') return 15 * intensity
    return 0
  }
  
  // Calculate tear visibility
  const getTearOpacity = () => {
    return emotion === 'sad' ? intensity : 0
  }
  
  // Calculate face scale for dramatic effect
  const getFaceScale = () => {
    if (emotion === 'happy' && intensity > 0.7) return 1.1
    if (emotion === 'sad' && intensity > 0.7) return 0.95
    return 1
  }

  return (
    <svg 
      className="face-svg" 
      viewBox="0 0 300 300" 
      style={{ 
        transform: `scale(${getFaceScale()})`,
        filter: `hue-rotate(${scrollPercentage * 3.6}deg)`
      }}
    >
      {/* Face outline */}
      <circle 
        cx="150" 
        cy="150" 
        r="120" 
        fill={getFaceColor()}
        stroke="#333"
        strokeWidth="3"
        style={{ 
          transition: 'all 0.3s ease',
          filter: `brightness(${1 + (intensity * 0.3)})`
        }}
      />
      
      {/* Left eyebrow */}
      <rect 
        x="95" 
        y="110" 
        width="30" 
        height="6" 
        fill="#333"
        rx="3"
        transform={`rotate(${getEyebrowRotation()} 110 113)`}
        style={{ transition: 'all 0.3s ease' }}
      />
      
      {/* Right eyebrow */}
      <rect 
        x="175" 
        y="110" 
        width="30" 
        height="6" 
        fill="#333"
        rx="3"
        transform={`rotate(${-getEyebrowRotation()} 190 113)`}
        style={{ transition: 'all 0.3s ease' }}
      />
      
      {/* Left eye */}
      <ellipse 
        cx="110" 
        cy="130" 
        rx="15" 
        ry={getEyeHeight()}
        fill="#333"
        style={{ transition: 'all 0.3s ease' }}
      />
      
      {/* Right eye */}
      <ellipse 
        cx="190" 
        cy="130" 
        rx="15" 
        ry={getEyeHeight()}
        fill="#333"
        style={{ transition: 'all 0.3s ease' }}
      />
      
      {/* Eye sparkles for happy emotion */}
      {emotion === 'happy' && (
        <>
          <circle cx="105" cy="125" r="3" fill="white" opacity={intensity} />
          <circle cx="185" cy="125" r="3" fill="white" opacity={intensity} />
        </>
      )}
      
      {/* Tears for sad emotion */}
      {emotion === 'sad' && (
        <>
          <ellipse 
            cx="105" 
            cy="145" 
            rx="3" 
            ry="8" 
            fill="#4A90E2"
            opacity={getTearOpacity()}
            style={{ transition: 'all 0.3s ease' }}
          />
          <ellipse 
            cx="195" 
            cy="145" 
            rx="3" 
            ry="8" 
            fill="#4A90E2"
            opacity={getTearOpacity()}
            style={{ transition: 'all 0.3s ease' }}
          />
        </>
      )}
      
      {/* Nose */}
      <ellipse 
        cx="150" 
        cy="150" 
        rx="4" 
        ry="6" 
        fill="#333"
        opacity="0.3"
      />
      
      {/* Mouth */}
      <path 
        d={getMouthPath()}
        stroke="#333"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{ transition: 'all 0.3s ease' }}
      />
      
      {/* Cheek blush for happy emotion */}
      {emotion === 'happy' && (
        <>
          <circle 
            cx="80" 
            cy="160" 
            r="15" 
            fill="#FF69B4"
            opacity={intensity * 0.3}
            style={{ transition: 'all 0.3s ease' }}
          />
          <circle 
            cx="220" 
            cy="160" 
            r="15" 
            fill="#FF69B4"
            opacity={intensity * 0.3}
            style={{ transition: 'all 0.3s ease' }}
          />
        </>
      )}
      
      {/* Animated particles around face for extreme emotions */}
      {(emotion === 'happy' && intensity > 0.8) && (
        <g>
          <circle cx="70" cy="80" r="2" fill="#FFD700" opacity={intensity}>
            <animate attributeName="r" values="2;4;2" dur="1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="230" cy="80" r="2" fill="#FFD700" opacity={intensity}>
            <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="50" cy="150" r="2" fill="#FFD700" opacity={intensity}>
            <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="250" cy="150" r="2" fill="#FFD700" opacity={intensity}>
            <animate attributeName="r" values="2;4;2" dur="1.2s" repeatCount="indefinite"/>
          </circle>
        </g>
      )}
    </svg>
  )
}

export default EmotionalFace 