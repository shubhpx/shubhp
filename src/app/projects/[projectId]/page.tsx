import { notFound } from "next/navigation";

export default function ProjectDetails({
    params,
  } : {
    params : {projectId : string};
}) {
  let projects: string[] = ["ml", "dl", "computer-graphics", "computer-vision", "deep-learning", "machine-learning"];
  if (!projects.includes(params.projectId.toLowerCase()))
  {
    notFound();
  } 
  return <h1>Details about {params.projectId} Project </h1>
}