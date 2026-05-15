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
        <div className="font-mono text-8xl md:text-9xl font-bold tracking-tight">
          <span className="text-red-500">{hours[0]}</span>
          <span className="text-orange-500">{hours[1]}</span>
          <span className="text-yellow-500 animate-pulse">:</span>
          <span className="text-green-500">{minutes[0]}</span>
          <span className="text-cyan-500">{minutes[1]}</span>
          <span className="text-blue-500 animate-pulse">:</span>
          <span className="text-violet-500">{seconds[0]}</span>
          <span className="text-pink-500">{seconds[1]}</span>
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
