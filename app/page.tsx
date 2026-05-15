"use client"

import { useState, useEffect } from "react"

export default function ClockPage() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours().toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")
  const seconds = time.getSeconds().toString().padStart(2, "0")

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="font-mono text-8xl md:text-9xl font-bold tracking-tight text-foreground">
          {hours}
          <span className="animate-pulse">:</span>
          {minutes}
          <span className="animate-pulse">:</span>
          {seconds}
        </div>
        <p className="mt-4 text-muted-foreground text-lg">
          {time.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </main>
  )
}
