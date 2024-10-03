"use client"
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export default function WorkButton() {
  const router = useRouter();
  return (
    <Button size="lg" onClick={() => {router.push("#projects")}} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Our Work
              <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
