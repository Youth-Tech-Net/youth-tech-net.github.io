const GradientText = ({ children, className = '' }) => {
  return (
    <span
      className={`bg-gradient-to-r from-purple to-orange bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}

export default GradientText
