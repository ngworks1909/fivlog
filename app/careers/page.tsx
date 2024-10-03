import ScrollButton from "@/components/buttons/ScrollButton"
import SubmitResume from "@/components/buttons/SubmitResume"
import JobGroup from "@/components/careers/JobGroup"
import Joinus from "@/components/careers/JoinUs"

import Process from "@/components/careers/Process"
import Navbar from "@/components/navbar/Navbar"


export default function Page() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <Navbar/>
      <section className="relative py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {`Be part of a team that's shaping the future of technology`}
            </p>
            < ScrollButton/>
          </div>
        </div>
      </section>

      <Joinus/>
      <JobGroup/>
      <Process/>
      

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{`Don't See a Perfect Fit?`}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {`We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in mind for future opportunities.`}
          </p>
          <SubmitResume/>
        </div>
      </section>
    </div>
  )
}