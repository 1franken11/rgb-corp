import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/rgb_corp/",
    label: "Follow us on Instagram"
  },
  {
    icon: <FaFacebook size={20} />,
    href: "https://www.facebook.com/profile.php?id=61562097362152",
    label: "Follow us on Facebook"
  },
  {
    icon: <FaWhatsapp size={20} />,
    href: "https://wa.me/+19044225380",
    label: "Contact us on WhatsApp"
  }
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerLeft}>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <span className={styles.copyright}>
          ©{currentYear} RGB Corporation
        </span>
      </div>

      <div className={styles.footerRight}>
        <span className={styles.credit}>Designed by Franco Garcia</span>
      </div>
    </footer>
  );
};

export default Footer; 