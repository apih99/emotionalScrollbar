import React, { useState, useEffect } from 'react'
import EmotionalFace from './components/EmotionalFace'
import ParticleSystem from './components/ParticleSystem'

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [emotion, setEmotion] = useState('neutral')
  const [emotionIntensity, setEmotionIntensity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollPercentage(Math.round(scrollPercent))
      
      // Calculate emotion based on scroll position
      if (scrollPercent <= 30) {
        setEmotion('happy')
        setEmotionIntensity(1 - (scrollPercent / 30))
      } else if (scrollPercent <= 70) {
        setEmotion('neutral')
        setEmotionIntensity(Math.abs(50 - scrollPercent) / 20)
      } else {
        setEmotion('sad')
        setEmotionIntensity((scrollPercent - 70) / 30)
      }
      
      // Update background color based on emotion
      const body = document.body
      if (scrollPercent <= 30) {
        body.style.background = `linear-gradient(135deg, #667eea ${scrollPercent}%, #764ba2 100%)`
      } else if (scrollPercent <= 70) {
        body.style.background = `linear-gradient(135deg, #f093fb ${scrollPercent}%, #f5576c 100%)`
      } else {
        body.style.background = `linear-gradient(135deg, #4facfe ${scrollPercent}%, #00f2fe 100%)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getEmotionText = () => {
    switch(emotion) {
      case 'happy':
        return scrollPercentage <= 10 ? 'Ecstatic! 🎉' : 'Happy! 😊'
      case 'sad':
        return scrollPercentage >= 90 ? 'Devastated 😭' : 'Sad 😢'
      default:
        return 'Neutral 😐'
    }
  }

  return (
    <div className="container">
      <ParticleSystem emotion={emotion} intensity={emotionIntensity} />
      
      <div className="face-container">
        <EmotionalFace 
          emotion={emotion} 
          intensity={emotionIntensity}
          scrollPercentage={scrollPercentage}
        />
        <div className="emotion-text">
          {getEmotionText()}
        </div>
      </div>
      
      <div className="scroll-indicator">
        Scroll: {scrollPercentage}%
      </div>
      
      <div className="instructions">
        Scroll to control my emotions! 🎭
      </div>
    </div>
  )
}

export default App 