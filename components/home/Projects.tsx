import { Button } from '../ui/button'

export default function Projects() {
  return (
    <section id='projects' className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded-lg">
                  <input type="image"
                    src={`placeholder.svg`}
                    alt={`Project ${item}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary">View Project</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
