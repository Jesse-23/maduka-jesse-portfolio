import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/Jesse-23', label: 'GitHub' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/jesse-maduka-b38183344/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: faTwitter, href: 'https://x.com/Dev_JesseMaduka?t=tsWDvAmH0wVIb0mmzxS6MQ&s=09', label: 'Twitter' },
    { icon: faTiktok, href: 'https://www.tiktok.com/@je_sse78?_t=ZS-8zjOBHdzz3x&_r=1', label: 'TikTok' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="section-container flex flex-col items-center text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-2 text-foreground"
        >
          Maduka Jesse
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-accent font-medium mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl"
        >
          I create beautiful, premium, functional web experiences that solve real-world problems and delight users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex gap-3 mb-12"
        >
          <a href="#projects" className="btn-primary text-sm px-5 py-2.5">
            View Projects
          </a>
          <a href="#contact" className="btn-outline text-sm px-5 py-2.5">
            Contact Me
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm bg-secondary text-secondary-foreground font-medium rounded-lg transition-all duration-300 hover:bg-secondary/80"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4 mb-16"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-social"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="animate-bounce text-muted-foreground hover:text-accent transition-colors"
        >
          <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
