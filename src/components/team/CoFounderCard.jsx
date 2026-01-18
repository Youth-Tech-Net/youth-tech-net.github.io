import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const CoFounderCard = ({
  name,
  role,
  bio,
  image,
  social,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-white rounded-3xl p-10 md:p-12 shadow-md text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Avatar */}
      <div className="w-40 h-40 mx-auto mb-10 rounded-full bg-gradient-to-br from-purple/20 to-orange/20 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl font-bold text-purple/50">
            {name.charAt(0)}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-3">{name}</h3>
      <p className="text-purple font-medium mb-6">{role}</p>

      {bio && <p className="text-slate-600 mb-8 leading-relaxed">{bio}</p>}

      {/* Social links */}
      <div className="flex justify-center gap-8">
        {social?.linkedin && social.linkedin !== '#' && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple transition-colors"
            aria-label={`${name}'s LinkedIn`}
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {social?.twitter && social.twitter !== '#' && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple transition-colors"
            aria-label={`${name}'s Twitter`}
          >
            <FaTwitter size={20} />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default CoFounderCard
