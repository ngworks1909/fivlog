import React from 'react'

export default function Process() {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Application Process</h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-muted-foreground/20">
              {[
                { title: "Apply Online", description: "Submit your application through LinkedIn" },
                { title: "Initial Screening", description: "Our HR team reviews your application" },
                { title: "Interview", description: "Virtual interview with the hiring manager" },
                { title: "Offer", description: "Receive and review your offer" },
                { title: "Onboarding", description: "Receive and join the organisation" },
              ].map((step, index) => (
                <li key={index} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
  )
}
