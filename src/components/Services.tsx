import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faPalette, 
  faRocket, 
  faLightbulb, 
  faGlobe, 
  faCopy, 
  faServer, 
  faLayerGroup,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact, 
  faJs, 
  faPython, 
  faNodeJs, 
  faHtml5, 
  faCss3Alt, 
  faGitAlt, 
  faDocker, 
  faAws,
  faFigma
} from '@fortawesome/free-brands-svg-icons';

const Services = () => {
  const services = [
    { icon: faCode, title: 'Development', description: 'Building robust applications with modern technologies' },
    { icon: faPalette, title: 'Design', description: 'Creating beautiful and intuitive user interfaces' },
    { icon: faRocket, title: 'Performance', description: 'Optimizing for speed and scalability' },
    { icon: faLightbulb, title: 'Innovation', description: 'Bringing creative solutions to complex problems' },
    { icon: faGlobe, title: 'Custom Websites', description: 'Tailored websites that match your brand identity' },
    { icon: faCopy, title: 'Website Cloning & Rebranding', description: 'Recreating and rebranding existing websites' },
    { icon: faServer, title: 'Hosting & Deployment', description: 'Reliable hosting and seamless deployment solutions' },
    { icon: faReact, title: 'React Web Apps', description: 'Modern, interactive React applications' },
    { icon: faLayerGroup, title: 'Fullstack Apps', description: 'Complete end-to-end application development' },
  ];

  const technologies = [
    { icon: faReact, name: 'React' },
    { icon: faJs, name: 'JavaScript' },
    { icon: faCode, name: 'TypeScript' },
    { icon: faCss3Alt, name: 'Tailwind CSS' },
    { icon: faDatabase, name: 'Supabase' },
    { icon: faNodeJs, name: 'Node.js' },
    { icon: faHtml5, name: 'HTML5' },
    { icon: faCss3Alt, name: 'CSS3' },
    { icon: faGitAlt, name: 'Git' },
    { icon: faAws, name: 'AWS' },
    { icon: faFigma, name: 'Figma' },
    { icon: faDatabase, name: 'PostgreSQL' },
  ];

  return (
    <section id="services" className="bg-secondary/30">
      <div className="section-container">
        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technologies & Tools</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-24"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-sky transition-all duration-300 group"
            >
              <FontAwesomeIcon 
                icon={tech.icon} 
                className="w-8 h-8 text-muted-foreground group-hover:text-sky transition-colors" 
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            What I can do for you
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 bg-card rounded-xl border border-border hover:border-sky transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-sky/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky/20 transition-colors">
                <FontAwesomeIcon icon={service.icon} className="w-6 h-6 text-sky" />
              </div>
              <h4 className="font-heading font-bold mb-2">{service.title}</h4>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
