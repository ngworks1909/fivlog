"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function RedirectButton({value, path}: {value: string, path: string}) {
  const router = useRouter();
  return (
    <Button size="lg" onClick={() => {router.push(`/${path}`)}}>
        {value}
    </Button>
  )
}
