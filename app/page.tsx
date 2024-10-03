import Contact from "@/components/home/Contact"
import Footer from "@/components/home/Footer"
import Hero from "@/components/home/Hero"
import Projects from "@/components/home/Projects"
import Services from "@/components/home/Services"
import Testimonal from "@/components/home/Testimonal"
import Navbar from "@/components/navbar/Navbar"



export default function CompanyPortfolio() {
  

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar/>
      <main>
        <Hero/>
        <Services/>
        <Projects/>
        <Testimonal/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}