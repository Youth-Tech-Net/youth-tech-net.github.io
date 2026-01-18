const SectionDivider = ({
  variant = 'wave',
  colorFrom = 'cream',
  colorTo = 'white',
  flip = false,
}) => {
  const colors = {
    cream: '#faf7f2',
    white: '#ffffff',
    'cream-dark': '#f5f0e8',
    'cream-darker': '#efe8dd',
    'yellow-light': '#fffbd4',
  }

  const fillColor = colors[colorTo] || colorTo

  const paths = {
    wave: 'M0,0 C300,80 900,0 1200,60 L1200,120 L0,120 Z',
    'wave-gentle': 'M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z',
    curve: 'M0,0 Q600,120 1200,0 L1200,120 L0,120 Z',
  }

  return (
    <div
      className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}
      style={{ marginTop: '-1px', marginBottom: '-1px' }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24 lg:h-32"
        style={{ display: 'block' }}
      >
        <path d={paths[variant] || paths.wave} fill={fillColor} />
      </svg>
    </div>
  )
}

export default SectionDivider
