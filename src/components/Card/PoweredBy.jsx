import { motion } from 'framer-motion'

const PoweredBy = () => {
  return (
    <motion.div 
      className="powered-by"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <a 
        href="https://bcaitech.bh" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="powered-by-link"
      >
        Powered by <span className="powered-by-brand">Bcaitech</span>
      </a>
    </motion.div>
  )
}

export default PoweredBy
