import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200'

  const variants = {
    primary: 'bg-purple text-white hover:bg-purple-dark shadow-md hover:shadow-lg',
    secondary: 'bg-orange text-white hover:bg-orange-dark shadow-md hover:shadow-lg',
    outline: 'border-2 border-purple text-purple hover:bg-purple hover:text-white',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const MotionComponent = motion.create ? motion.create('button') : motion.button

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <Link to={href}>
        <motion.span
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex' }}
          {...props}
        >
          {children}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
