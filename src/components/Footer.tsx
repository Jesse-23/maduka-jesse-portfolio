import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/Jesse-23', label: 'GitHub' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/jesse-maduka-b38183344/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: faTwitter, href: 'https://x.com/Dev_JesseMaduka?t=tsWDvAmH0wVIb0mmzxS6MQ&s=09', label: 'Twitter' },
    { icon: faTiktok, href: 'https://www.tiktok.com/@je_sse78?_t=ZS-8zjOBHdzz3x&_r=1', label: 'TikTok' },
  ];

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-heading font-bold gradient-text mb-4 block">
              Dev.Jesse
            </Link>
            <p className="text-muted-foreground text-sm">
              Crafting beautiful, responsive and functional digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-sky transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold mb-4">Follow Me</h4>
            <div className="flex gap-3">
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
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Maduka Jesse.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
