"use client"
import React from 'react'
import { Button } from '../ui/button'

export default function ScrollButton() {
  return (
    <Button size="lg" onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}>
        View Open Positions
    </Button>
  )
}
