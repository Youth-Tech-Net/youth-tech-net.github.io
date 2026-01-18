import { motion } from 'framer-motion'
import { HiAcademicCap, HiLightBulb, HiSpeakerphone } from 'react-icons/hi'
import Button from './Button'

const icons = {
  hubs: HiAcademicCap,
  research: HiLightBulb,
  advocacy: HiSpeakerphone,
}

const colors = {
  hubs: {
    bg: 'bg-purple/15',
    border: 'border-purple',
    icon: 'text-purple',
    hover: 'hover:bg-purple/20',
  },
  research: {
    bg: 'bg-orange/15',
    border: 'border-orange',
    icon: 'text-orange',
    hover: 'hover:bg-orange/20',
  },
  advocacy: {
    bg: 'bg-yellow-brand/50',
    border: 'border-orange',
    icon: 'text-orange',
    hover: 'hover:bg-yellow-brand/60',
  },
}

const PillarCard = ({
  pillar,
  title,
  description,
  linkUrl,
  linkText = 'Learn More',
  delay = 0,
}) => {
  const Icon = icons[pillar]
  const color = colors[pillar]

  return (
    <motion.div
      className={`${color.bg} ${color.hover} rounded-3xl p-10 md:p-12 border-l-4 ${color.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`${color.icon} mb-8`}>
        <Icon size={48} />
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-5">{title}</h3>
      <p className="text-slate-600 mb-8 leading-relaxed">{description}</p>
      {linkUrl && (
        <Button
          href={linkUrl}
          external
          variant={pillar === 'hubs' ? 'primary' : pillar === 'research' ? 'secondary' : 'outline'}
          size="sm"
        >
          {linkText}
        </Button>
      )}
    </motion.div>
  )
}

export default PillarCard
