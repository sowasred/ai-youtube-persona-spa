"use client"

import { useState, useEffect } from "react"
import {
  IPhoneMockup,
} from "react-device-mockup"

export function MockupFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const [screenWidth, setScreenWidth] = useState(360)

  useEffect(() => {
    const calculateScreenWidth = () => {
      const viewportWidth = window.innerWidth
      
      // Responsive breakpoints for screenWidth
      if (viewportWidth < 480) {
        // Mobile: use 90% of viewport width with max 280px
        setScreenWidth(Math.min(viewportWidth * 0.9, 280))
      } else if (viewportWidth < 640) {
        // Mobile: use 90% of viewport width with max 280px
        setScreenWidth(Math.min(viewportWidth * 0.9, 300))
      } else if (viewportWidth < 768) {
        // Small tablets: use 85% with max 300px
        setScreenWidth(Math.min(viewportWidth * 0.85, 320))
      } else {
        // Desktop and larger: use default 320px
        setScreenWidth(360)
      }
    }

    // Calculate on mount
    calculateScreenWidth()

    // Recalculate on resize
    window.addEventListener("resize", calculateScreenWidth)

    return () => {
      window.removeEventListener("resize", calculateScreenWidth)
    }
  }, [])

  return (
      <IPhoneMockup
        screenWidth={screenWidth}
        hideStatusBar
        transparentNavBar
        frameColor={"#000000"}
      >
        {children}
      </IPhoneMockup>
  )
}