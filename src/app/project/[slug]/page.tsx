import { projects } from "@/src/data/projects"
import ProjectPage from "../../components/ProjectPage"


type PageProps = {
  params: {
    slug: string;
  };
};


const page = async ({ params }: PageProps) => {

  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug == slug);
  const project = projects[index];
  return (
    <div>
       <ProjectPage project={project} />  
    </div>
  )
}

export default page
