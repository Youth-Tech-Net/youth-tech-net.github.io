import { motion } from 'framer-motion'

const Card = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300'

  const variants = {
    default: 'bg-white shadow-md',
    hubs: 'bg-white shadow-md border-l-4 border-purple',
    research: 'bg-white shadow-md border-l-4 border-orange',
    advocacy: 'bg-white shadow-md border-l-4 border-yellow-brand',
    glass: 'bg-white/80 backdrop-blur-sm shadow-md',
  }

  const hoverStyles = hover
    ? 'hover:shadow-lg hover:-translate-y-1'
    : ''

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
