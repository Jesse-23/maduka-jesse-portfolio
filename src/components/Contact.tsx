import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGithub, faLinkedin, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/Jesse-23', label: 'GitHub', color: 'hover:text-foreground' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/jesse-maduka-b38183344/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'hover:text-[#0077B5]' },
    { icon: faTwitter, href: 'https://x.com/Dev_JesseMaduka?t=tsWDvAmH0wVIb0mmzxS6MQ&s=09', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: faTiktok, href: 'https://www.tiktok.com/@je_sse78?_t=ZS-8zjOBHdzz3x&_r=1', label: 'TikTok', color: 'hover:text-foreground' },
  ];

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <a
                href="mailto:madukajesse14@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-sky transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-sky/10 rounded-lg flex items-center justify-center group-hover:bg-sky/20 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-sky" />
                </div>
                <div>
                  <h4 className="font-heading font-bold">Email Me</h4>
                  <p className="text-sm text-muted-foreground">madukajesse14@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.link/0imrn5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-[#25D366] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Chat with me directly</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold">Location</h4>
                  <p className="text-sm text-muted-foreground">Nigeria</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-card rounded-xl border border-border"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-8">
                Follow me on social media to stay updated with my latest projects and insights.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-secondary rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.color}`}
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-8 bg-gradient-to-r from-primary to-sky rounded-2xl text-white"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">Ready to Start a Project?</h3>
            <p className="mb-6 text-white/80">Let's work together to bring your ideas to life.</p>
            <a
              href="mailto:madukajesse14@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              Send Me a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
