import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const ProjectsPreview = () => {
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Here are some of my recent works that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 btn-primary group"
          >
            See More Projects
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
