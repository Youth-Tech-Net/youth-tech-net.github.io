import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { EXTERNAL_LINKS } from '../../utils/externalLinks'
import logo from '../../assets/images/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/get-involved', label: 'Get Involved' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Youth Tech Net" className="h-10 md:h-12 w-auto" />
            <span className="font-bold text-lg tracking-wide text-slate-800 hidden sm:block group-hover:text-purple transition-colors">
              YTN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide uppercase transition-colors hover:text-purple ${
                    isActive ? 'text-purple' : 'text-slate-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
              <a
                href={EXTERNAL_LINKS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-purple transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={EXTERNAL_LINKS.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-purple transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-purple text-white text-sm font-semibold rounded-full hover:bg-purple-dark transition-colors shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - Animated Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-800"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-colors ${
                  isActive ? 'text-purple' : 'text-slate-600'
                }`
              }
            >
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive ? 'text-purple' : 'text-slate-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-6 py-3 bg-purple text-white text-center font-semibold rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
