import prisma from "@/lib/client"
import redis from "@/lib/redis";

export type JobType = {
    type: string;
    jobId: string;
    title: string;
    description: string;
    openings: number;
    department: string;
    location: string;
    startedOn: Date;
    expiresOn: Date;
    linkedInUrl: string;
}

export const fetchOpenings = async() => {
    const redisKey = 'job_openings';
    const cachedData = await redis.get(redisKey);
    if (cachedData) {
        const jobs: JobType[] =  JSON.parse(cachedData);
        const currentTime = new Date()
        return jobs.filter((job) => job && new Date(job.expiresOn) > currentTime);
    }
    const jobs = await prisma.job.findMany({
        where: {
            expiresOn: {
                gte: new Date()
            }
        }
    })
    await redis.set(redisKey, JSON.stringify(jobs), 'EX', 3600);
    return jobs
}