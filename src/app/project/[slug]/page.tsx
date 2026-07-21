import { Project, projects } from "@/src/data/projects"
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
  const nextProject = projects[(index + 1) % projects.length];
  return (
    <div>
      <ProjectPage project={project} nextProject={nextProject} />
    </div>
  );
}

export default page
