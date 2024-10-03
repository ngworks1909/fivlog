import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function Contact() {
  return (
    <section id="contact-us" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <form action="https://getform.io/f/arolvoqb" method="POST" className="space-y-4">
                  <Input placeholder="Your Name" name="name" />
                  <Input type="email" placeholder="Your Email" name="email" />
                  <Textarea placeholder="Your Message" name="message" rows={4} />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>123 Business St, Tech City, 98765</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>+1 (234) 567-8901</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>contact@companyname.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
