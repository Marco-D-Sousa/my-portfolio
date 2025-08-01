import './AnimatedBlob.css'
import { useEffect, useRef } from 'react'
import { animate, svg, utils } from 'animejs'

function AnimatedBlob() {
  const svgRef = useRef(null)

  useEffect(() => {
    if (!svgRef.current) return

    const [$path1, $path2] = svgRef.current.querySelectorAll('polygon')

    function animateRandomPoints() {
      // Update the points attribute on #path-2
      utils.set($path2, { points: generatePoints() })
      // Morph the points of #path-1 into #path-2
      animate($path1, {
        points: svg.morphTo($path2),
        ease: 'inOutCirc',
        duration: 1500, // Aumentei a duração para ficar mais suave
        onComplete: animateRandomPoints
      })
    }

    // Start the animation
    animateRandomPoints()

    // A function to generate random points on #path-2 on each iteration
    function generatePoints() {
      const total = utils.random(6, 12) // Reduzi para formas mais suaves
      const r1 = utils.random(150, 220) // Ajustei os raios
      const r2 = 250
      const centerX = 250 // Centro X ajustado para viewBox maior
      const centerY = 250 // Centro Y ajustado para viewBox maior
      const isOdd = n => n % 2
      let points = ''
      
      for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
        const r = isOdd(i) ? r1 : r2
        const a = (2 * Math.PI * i / l) - Math.PI / 2
        const x = centerX + utils.round(r * Math.cos(a), 0)
        const y = centerY + utils.round(r * Math.sin(a), 0) // Centralizei melhor
        points += `${x},${y} `
      }
      return points
    }

    // Cleanup function para parar a animação quando o componente desmontar
    return () => {
      // AnimeJS não tem um método direto de cleanup, mas podemos parar manualmente
    }
  }, [])

  return (
    <div className="morphing-shape">
      <svg ref={svgRef} viewBox="0 0 500 500" className="morphing-svg">
        <defs>
          <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#646cff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#535bf2" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <g strokeWidth="2" stroke="url(#shapeGradient)" strokeLinejoin="round" fill="url(#shapeGradient)" fillRule="evenodd">
          <polygon 
            id="path-1" 
            points="250,80 280,130 350,160 280,190 250,240 220,190 150,160 220,130"
          />
          <polygon 
            style={{ opacity: 0 }} 
            id="path-2" 
            ppoints="250,80 280,130 350,160 280,190 250,240 220,190 150,160 220,130"
          />
        </g>
      </svg>
    </div>
  )
}

export default AnimatedBlob