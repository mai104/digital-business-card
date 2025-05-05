import { motion } from 'framer-motion'
import { Envelope, Telephone, Whatsapp, Globe } from 'react-bootstrap-icons'

const CardContacts = ({ client }) => {
  const contacts = [
    {
      icon: Envelope,
      value: client.email,
      label: 'Work',
      href: `mailto:${client.email}`,
      color: '#EA4335'
    },
    {
      icon: Telephone,
      value: client.phone,
      label: 'Work',
      href: `tel:${client.phone}`,
      color: '#0F9D58'
    },
    {
      icon: Whatsapp,
      value: 'Connect with me on WhatsApp',
      href: `https://wa.me/${client.whatsapp.replace('+', '')}`,
      color: '#25D366'
    },
    {
      icon: Globe,
      value: 'Visit our website',
      href: client.website,
      color: '#4285F4'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      className="contact-list"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {contacts.map((contact, index) => (
        <motion.a
          key={index}
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="contact-item"
          variants={itemVariants}
          whileHover={{ 
            x: 10,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="contact-icon"
            whileHover={{ 
              backgroundColor: contact.color,
              color: 'white',
              transition: { duration: 0.3 }
            }}
          >
            <contact.icon size={20} />
          </motion.div>
          <div>
            <div className="contact-text">{contact.value}</div>
            {contact.label && <div className="contact-label">{contact.label}</div>}
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}

export default CardContacts
