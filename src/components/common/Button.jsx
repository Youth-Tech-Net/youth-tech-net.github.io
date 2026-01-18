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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-[var(--radius-lg)] transition-all'
  const baseStyle = {
    boxShadow: 'var(--shadow-md)',
    transitionDuration: 'var(--transition-fast)'
  }

  const variants = {
    primary: {
      style: {
        backgroundColor: 'var(--color-purple)',
        color: 'var(--color-text-inverse)',
        transitionDuration: 'var(--transition-fast)'
      },
      hoverStyle: {
        backgroundColor: 'var(--color-purple-dark)',
        boxShadow: 'var(--shadow-lg)'
      }
    },
    secondary: {
      style: {
        backgroundColor: 'var(--color-orange)',
        color: 'var(--color-text-inverse)',
        transitionDuration: 'var(--transition-fast)'
      },
      hoverStyle: {
        backgroundColor: 'var(--color-orange-dark)',
        boxShadow: 'var(--shadow-lg)'
      }
    },
    outline: {
      style: {
        backgroundColor: 'transparent',
        color: 'var(--color-purple)',
        borderColor: 'var(--color-purple)',
        borderWidth: '2px',
        transitionDuration: 'var(--transition-fast)'
      },
      hoverStyle: {
        backgroundColor: 'var(--color-purple)',
        color: 'var(--color-text-inverse)'
      }
    }
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const combinedClassName = `${baseStyles} ${sizes[size]} ${className}`

  const MotionComponent = motion.create ? motion.create('button') : motion.button

  const variantConfig = variants[variant]

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          style={{
            ...baseStyle,
            ...variantConfig.style,
            ...props.style
          }}
          whileHover={{
            scale: 1.02,
            ...variantConfig.hoverStyle
          }}
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
          style={{
            display: 'inline-flex',
            ...baseStyle,
            ...variantConfig.style,
            ...props.style
          }}
          whileHover={{
            scale: 1.02,
            ...variantConfig.hoverStyle
          }}
          whileTap={{ scale: 0.98 }}
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
      style={{
        ...baseStyle,
        ...variantConfig.style,
        ...props.style
      }}
      whileHover={{
        scale: 1.02,
        ...variantConfig.hoverStyle
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
