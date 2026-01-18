import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { EXTERNAL_LINKS } from '../../utils/externalLinks'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cream-dark py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Youth Tech Net" className="h-10 w-auto" />
              <span className="font-bold text-lg text-[#1a1a1a]">
                Youth Tech Net
              </span>
            </Link>
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              Australian youth building our sociotechnical future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#1a1a1a] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#4a4a4a] hover:text-purple text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#4a4a4a] hover:text-purple text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-[#4a4a4a] hover:text-purple text-sm transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#4a4a4a] hover:text-purple text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-[#1a1a1a] mb-4">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={EXTERNAL_LINKS.hubs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a4a4a] hover:text-purple text-sm transition-colors"
                >
                  University Hubs
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.research.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a4a4a] hover:text-purple text-sm transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.advocacy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a4a4a] hover:text-purple text-sm transition-colors"
                >
                  Policy Advocacy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-[#1a1a1a] mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={EXTERNAL_LINKS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a4a4a] hover:text-purple transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={EXTERNAL_LINKS.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a4a4a] hover:text-purple transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={EXTERNAL_LINKS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a4a4a] hover:text-purple transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={`mailto:${EXTERNAL_LINKS.social.email}`}
                className="text-[#4a4a4a] hover:text-purple transition-colors"
                aria-label="Email"
              >
                <HiMail size={20} />
              </a>
            </div>
            <p className="text-[#4a4a4a] text-sm">
              {EXTERNAL_LINKS.social.email}
            </p>
          </div>
        </div>

        <div className="border-t border-cream-darker mt-12 pt-8 text-center">
          <p className="text-[#6b6b6b] text-sm">
            &copy; {currentYear} Youth Tech Net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
