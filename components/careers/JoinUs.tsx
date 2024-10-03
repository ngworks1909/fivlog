import React from 'react'
import { Heart, DollarSign, Briefcase, Users, Coffee, Zap } from "lucide-react"
import { Card, CardContent } from '../ui/card'

const benifits = [
    { icon: Heart, title: "Meaningful Work", description: "Make a real impact on businesses and users worldwide" },
    { icon: Users, title: "Collaborative Culture", description: "Work with talented individuals in a supportive environment" },
    { icon: Zap, title: "Innovation Focus", description: "Stay at the forefront of technology and industry trends" },
    { icon: Coffee, title: "Work-Life Balance", description: "Flexible schedules and remote work options" },
    { icon: DollarSign, title: "Competitive Compensation", description: "Attractive salary and equity packages" },
    { icon: Briefcase, title: "Career Growth", description: "Opportunities for learning and advancement" },
  ]

export default function Joinus() {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benifits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
