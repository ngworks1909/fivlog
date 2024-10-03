import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import ApplyButton from "../buttons/ApplyButton";
import { JobType } from "@/actions/fetchOpenings";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";


export default function JobItem({job} : {job: JobType}) {
  return (
    // <Card>
    //   <CardContent className="p-6">
    //     <h3 className="text-xl font-semibold mb-2">${job.title}</h3>
    //     <div className="flex flex-wrap gap-2 mb-4">
    //       <Badge variant="secondary">{job.department}</Badge>
    //       <Badge variant="outline">
    //         <MapPin className="w-3 h-3 mr-1" />
    //         {job.location}
    //       </Badge>
    //       <Badge variant="outline">
    //         <Clock className="w-3 h-3 mr-1" />
    //         {job.type}
    //       </Badge>
    //     </div>
    //     <p className="text-muted-foreground mb-4">
    //       {`We're looking for a talented ${job.title} to join our team and help us build amazing products.`}
    //     </p>
    //   </CardContent>
    //   <CardFooter className="flex flex-col sm:flex-row gap-2">
    //     <Button variant="outline" className="w-full sm:w-1/2">
    //       View Details
    //     </Button>
    //     <ApplyButton linkedInUrl={job.linkedInUrl} />
    //   </CardFooter>
    // </Card>

    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{job.department}</Badge>
          <Badge variant="outline"><MapPin className="w-3 h-3 mr-1" />{job.location}</Badge>
          <Badge variant="outline"><Clock className="w-3 h-3 mr-1" />{job.type}</Badge>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {job.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full sm:w-1/2">View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{job.title}</DialogTitle>
              <DialogDescription>{job.department} - {job.location}</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <h4 className="text-sm font-medium mb-2">Job Description</h4>
              <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
              <h4 className="text-sm font-medium mb-2">Number of Openings</h4>
              <p className="text-sm text-muted-foreground mb-4">{job.openings}</p>
              <h4 className="text-sm font-medium mb-2">Application Period</h4>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Posted on: {new Date(job.startedOn).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Last date to apply: {new Date(job.expiresOn).toLocaleDateString()}</span>
              </div>
              <div className="pt-3">
              <ApplyButton linkedInUrl={job.linkedInUrl}/>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <ApplyButton linkedInUrl={job.linkedInUrl}/>
      </CardFooter>
    </Card>
  );
}
