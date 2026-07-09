import { useEffect, useState, type ReactNode } from 'react'

interface ResponsiveCanvasProps {
  baseWidth: number
  baseHeight: number
  children: ReactNode
}

export default function ResponsiveCanvas({ baseWidth, baseHeight, children }: ResponsiveCanvasProps) {
  const [scale, setScale] = useState(1)
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const updateScale = () => {
      const nextScale = window.innerWidth / baseWidth
      setScale(nextScale)
      setViewportHeight(window.innerHeight)
    }

    updateScale()
    window.addEventListener('resize', updateScale)

    return () => window.removeEventListener('resize', updateScale)
  }, [baseWidth])

  return (
    <div style={{ position: 'relative', width: '100%', height: Math.max(baseHeight * scale, viewportHeight), overflow: 'hidden', background: '#fff' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: baseWidth,
          height: baseHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}