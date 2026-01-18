import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiMail, HiArrowUp } from 'react-icons/hi'
import { EXTERNAL_LINKS } from '../../utils/externalLinks'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Youth Tech Net" className="h-10 w-auto brightness-0 invert" />
              <span className="font-bold text-lg">
                Youth Tech Net
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Australian youth building our sociotechnical future through education, research, and advocacy.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href={EXTERNAL_LINKS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={EXTERNAL_LINKS.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href={EXTERNAL_LINKS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={`mailto:${EXTERNAL_LINKS.social.email}`}
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple hover:text-white transition-all"
                aria-label="Email"
              >
                <HiMail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-purple-300 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-purple-300 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-slate-400 hover:text-purple-300 text-sm transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-purple-300 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Pillars */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Our Pillars</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={EXTERNAL_LINKS.hubs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-300 text-sm transition-colors"
                >
                  University Hubs
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.research.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-300 text-sm transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.advocacy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-300 text-sm transition-colors"
                >
                  Policy Advocacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <a
              href={`mailto:${EXTERNAL_LINKS.social.email}`}
              className="text-purple-300 hover:text-purple-200 text-sm transition-colors"
            >
              {EXTERNAL_LINKS.social.email}
            </a>
            <p className="text-slate-400 text-sm mt-4">
              Australia-wide network operating across university campuses
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Youth Tech Net. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-slate-500">Built with purpose by Australian youth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-purple text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-dark transition-all z-40 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Back to top"
      >
        <HiArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

export default Footer
