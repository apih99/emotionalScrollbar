import React, { useEffect, useState } from 'react'

const ParticleSystem = ({ emotion, intensity }) => {
  const [particles, setParticles] = useState([])
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      const particleCount = Math.floor(intensity * 20)
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 6,
          duration: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(emotion)
        })
      }
      setParticles(newParticles)
    }
    
    generateParticles()
  }, [emotion, intensity])
  
  const getParticleColor = (emotion) => {
    switch(emotion) {
      case 'happy':
        return ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 4)]
      case 'sad':
        return ['#6C7CE0', '#74B9FF', '#A29BFE', '#81ECEC'][Math.floor(Math.random() * 4)]
      default:
        return ['#FD79A8', '#FDCB6E', '#E17055', '#74B9FF'][Math.floor(Math.random() * 4)]
    }
  }
  
  const getParticleShape = (emotion) => {
    switch(emotion) {
      case 'happy':
        return '★'
      case 'sad':
        return '💧'
      default:
        return '●'
    }
  }
  
  return (
    <div className="particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: particle.color
          }}
        >
          {emotion !== 'neutral' && getParticleShape(emotion)}
        </div>
      ))}
    </div>
  )
}

export default ParticleSystem 