import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import JobItem from './JobItem'
import { fetchOpenings } from '@/actions/fetchOpenings'


export default async function JobGroup() {
  const jobOpenings = await fetchOpenings();
  return (
    <section id="openings" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:max-w-[600px] mx-auto mb-8">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Engineering">Engineering</TabsTrigger>
              <TabsTrigger value="Design">Design</TabsTrigger>
              <TabsTrigger value="Other">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="All">
              <div className="grid md:grid-cols-2 gap-6">
                {jobOpenings.map((job, index) => (
                   <JobItem key={index} job = {job}/>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Engineering">
              <div className="grid md:grid-cols-2 gap-6">
                {jobOpenings.filter(job => job.department === "Engineering").map((job, index) => (
                  <JobItem key={index} job={job}/>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Design">
              <div className="grid md:grid-cols-2 gap-6">
                {jobOpenings.filter(job => job.department === "Design").map((job, index) => (
                  <JobItem key={index} job={job}/>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Other">
              <div className="grid md:grid-cols-2 gap-6">
                {jobOpenings.filter(job => !["Engineering", "Design"].includes(job.department)).map((job, index) => (
                   <JobItem key={index} job={job}/>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
  )
}
