import { motion } from 'framer-motion'

const CardInfo = ({ client }) => {
  const nameVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="card-content">
      <motion.h2 
        className="name-english"
        variants={nameVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        style={{
          fontSize: '1.6rem',
          fontWeight: '700',
          marginBottom: '5px',
          color: '#000'
        }}
      >
        {client.name}
      </motion.h2>
      
      <motion.div 
        className="position"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: '1.1rem',
          fontWeight: '500',
          color: '#666',
          marginBottom: '20px'
        }}
      >
        {client.title}
      </motion.div>

      <motion.div 
        className="description-box"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 0.5,
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <p className="description-text">{client.description}</p>
      </motion.div>
    </div>
  )
}

export default CardInfo
