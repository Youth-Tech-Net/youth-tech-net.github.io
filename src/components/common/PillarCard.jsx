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
      className={`${color.bg} ${color.hover} rounded-2xl p-10 pl-14 border-l-4 ${color.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`${color.icon} mb-6`}>
        <Icon size={44} />
      </div>
      <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{title}</h3>
      <p className="text-[#4a4a4a] mb-10 leading-relaxed">{description}</p>
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
