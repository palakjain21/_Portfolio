import { experienceType } from "../interfaces/Experience";

export const experiences = [
  {
    title: "Software Development Engineer",
    company: `Super.Money`,
    content:[
      "Developed and deployed analytics events ingestion service using BigQuery on Google Cloud Platform (GCP) for the Offer-Orchestration service, utilizing Java.",
      "Designed and implemented a new lender journey flow on the platform for a major banking client using Java.",
      "Refactored and optimized an existing lender journey flow for another significant banking client to enhance performance and maintainability, leveraging Java."
    ],
    stack: ["JavaScript", "React", "Go", "Vercel","RabbitMQ"],
    start:"Jun 2024",
    end:"current"
  },
  {
    title: "Software Development Engineer",
    company: `Super.Money`,
    content:[""],
    stack: ["JavaScript", "React", "Go", "Vercel","RabbitMQ"],
    start:"",
    end:""
  },
  {
    title: "Software Development Engineer",
    company: `Super.Money`,
    content:[""],
    stack: ["JavaScript", "React", "Go", "Vercel","RabbitMQ"],
    start:"",
    end:""
  },
] as experienceType[];
