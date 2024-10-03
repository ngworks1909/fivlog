"use client"
import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
const services = [
    { name: "Web Development", description: "Create stunning and functional websites tailored to your needs." },
    { name: "Mobile Apps", description: "Develop powerful mobile applications for iOS and Android platforms." },
    { name: "Cloud Solutions", description: "Implement scalable and secure cloud infrastructure for your business." },
    { name: "UI/UX Design", description: "Design intuitive and engaging user interfaces for optimal user experience." },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  return (
    <section id="services" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <nav className="space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out relative overflow-hidden ${
                        index === activeService ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setActiveService(index)}
                    >
                      <span className="relative z-10">{service.name}</span>
                      <span
                        className={`absolute inset-0 bg-primary/10 transition-all duration-300 ease-in-out ${
                          index === activeService ? "w-full" : "w-0"
                        }`}
                      />
                    </button>
                  ))}
                </nav>
              </div>
              <div className="md:w-2/3">
                <Card className="bg-card text-card-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{services[activeService].name}</h3>
                    <p className="text-muted-foreground">{services[activeService].description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
  )
}
