import RedirectButton from "@/components/buttons/RedirectButton"
import Navbar from "@/components/navbar/Navbar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, Zap } from "lucide-react"

export default function page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar/>
      <section className="relative py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Innovating technology solutions since 2010
            </p>
            < RedirectButton value="Join Our Team" path="careers"/>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                {`Founded in 2010, our company has been at the forefront of technological innovation for over a decade. What started as a small team of passionate developers has grown into a global force in the tech industry.`}
              </p>
              <p className="text-muted-foreground mb-4">
                {`Throughout our journey, we've remained committed to our core values of innovation, quality, and customer satisfaction. These principles have guided us as we've expanded our services and reached new markets.`}
              </p>
              <p className="text-muted-foreground">
                {`Today, we're proud to be a trusted partner for businesses of all sizes, helping them navigate the complex world of technology and achieve their goals.`}
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <input type="image"
                src="placeholder.svg?height=400&width=600&text=Company+History"
                alt="Company History"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses through innovative technology solutions, enabling them to thrive in the digital age. We strive to create lasting value for our clients, employees, and communities by delivering excellence in every project we undertake.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Innovation</Badge>
                    {`Constantly pushing the boundaries of what's possible`}
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Quality</Badge>
                    {`Delivering excellence in every aspect of our work`}
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Integrity</Badge>
                    {`Maintaining the highest ethical standards in all we do`}
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Collaboration</Badge>
                    {`Fostering teamwork and open communication`}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=300&width=300&text=Jane+Doe" },
              { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=300&width=300&text=John+Smith" },
              { name: "Emily Brown", role: "COO", image: "/placeholder.svg?height=300&width=300&text=Emily+Brown" },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <input type="image"
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, label: "Years in Business", value: "13+" },
              { icon: Users, label: "Happy Clients", value: "500+" },
              { icon: Zap, label: "Projects Completed", value: "1000+" },
              { icon: Award, label: "Industry Awards", value: "25+" },
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {`Let's create something amazing together`}
          </p>
          <RedirectButton value="Get in Touch" path="#contact-us"/>
        </div>
      </section>
    </div>
  )
}
