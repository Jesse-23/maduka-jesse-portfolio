import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            I'm a full stack developer with a passion for creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* My Profile Photo */}
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-sky to-primary p-1">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <img 
                    src="/images/jesse_maduka.jpg" 
                    alt="Maduka Jesse" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold mb-6">Who I Am</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm Maduka Jesse, a dedicated developer with a strong foundation in both frontend and backend technologies. 
                I love turning ideas into reality through clean, efficient code and intuitive design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in web development, I specialize in building scalable applications 
                that provide exceptional user experiences. I'm constantly learning and adapting to new technologies 
                to deliver the best solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
