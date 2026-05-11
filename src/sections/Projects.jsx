import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/data";
import { useTranslation } from "react-i18next"; // Import

export default function Projects() {
  const { t } = useTranslation(); // Inisialisasi

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle={t("projects_subtitle")}
          title={t("projects_title")}
          description={t("projects_desc")}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
