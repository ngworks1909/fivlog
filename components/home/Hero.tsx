"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import WorkButton from '../buttons/WorkButton'

const carouselItems = [
    {
      image: "placeholder.svg?height=600&width=1200&text=Slide 1",
      title: "Innovate",
      description: "Pushing the boundaries of technology",
    },
    {
      image: "placeholder.svg?height=600&width=1200&text=Slide 2",
      title: "Create",
      description: "Bringing your ideas to life",
    },
    {
      image: "placeholder.svg?height=600&width=1200&text=Slide 3",
      title: "Succeed",
      description: "Achieving your business goals",
    },
  ]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [slideDirection, setSlideDirection] = useState("right")
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSlideDirection("right")
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
      }, 3000)
      return () => clearInterval(timer)
    }, [])
  
    const goToSlide = (index: number) => {
      setSlideDirection(index > currentSlide ? "right" : "left")
      setCurrentSlide(index)
    }
  
    const goToPrevSlide = () => {
      setSlideDirection("left")
      setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length)
    }
  
    const goToNextSlide = () => {
      setSlideDirection("right")
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center overflow-hidden">
          <div className="relative w-full h-full">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                  index === currentSlide
                    ? "translate-x-0"
                    : index === (currentSlide + 1) % carouselItems.length
                    ? "translate-x-full"
                    : "-translate-x-full"
                }`}
                style={{
                  transform: `translateX(${
                    index === currentSlide
                      ? "0%"
                      : index === (currentSlide + 1) % carouselItems.length
                      ? "100%"
                      : "-100%"
                  })`,
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{item.title}</h1>
                  <p className="text-xl text-white/90 mb-8">{item.description}</p>
                  <WorkButton/>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/40 text-white"
            onClick={goToPrevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/40 text-white"
            onClick={goToNextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </section>
  )
}
