import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const NewsletterForm = ({ className = '' }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <div className={className}>
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-4"
        >
          <p className="text-purple font-semibold">Thanks for subscribing!</p>
          <p className="text-[#4a4a4a] text-sm mt-1">
            We'll keep you updated on our latest news.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-xl border border-cream-darker bg-white text-[#1a1a1a] placeholder-[#6b6b6b] focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all"
          />
          <Button
            type="submit"
            variant="primary"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default NewsletterForm
