import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group bg-card rounded-xl overflow-hidden border border-border card-hover"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-accent mb-2">
          <FontAwesomeIcon icon={faCode} className="w-4 h-4" />
          <span className="text-sm font-medium">Featured Project</span>
        </div>
        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-brown text-white rounded-lg hover:bg-brown-light transition-colors text-sm font-medium"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
