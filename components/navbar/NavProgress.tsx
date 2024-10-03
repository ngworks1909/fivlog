"use client"
import React, { useEffect, useState } from 'react'
import { Progress } from '../ui/progress'
import { usePathname } from 'next/navigation'

export default function NavProgress() {
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const pathname = usePathname()
  
    useEffect(() => {
      if (isLoading) {
        const timer = setTimeout(() => setProgress(66), 500)
        const timer2 = setTimeout(() => setProgress(100), 1000)
        return () => {
          clearTimeout(timer)
          clearTimeout(timer2)
        }
      }
    }, [isLoading])
  
    useEffect(() => {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 1500)
      return () => clearTimeout(timer)
    }, [pathname])
  return (
    <>
      {isLoading && (
        <div className="absolute top-16 left-0 right-0 z-50">
        <Progress value={progress} className="h-1" />
        </div>
      )}
    </>
  )
}
