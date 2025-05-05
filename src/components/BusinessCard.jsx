import { useState } from 'react'
import CardHeader from './Card/CardHeader'
import CardInfo from './Card/CardInfo'
import CardContacts from './Card/CardContacts'
import SaveContactButton from './Card/SaveContactButton'
import PoweredBy from './Card/PoweredBy'
import SaveContactModal from './Modals/SaveContactModal'
import EmailModal from './Modals/EmailModal'
import ShareModal from './Modals/ShareModal'
import SuccessModal from './Modals/SuccessModal'
import { clients } from '../data/clients'

const BusinessCard = () => {
  const client = clients[0]
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: ''
  })

  const handleSaveContact = () => {
    setShowSaveModal(true)
  }

  const handleDownloadVCF = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${client.name}
ORG:${client.companyName}
TITLE:${client.title}
EMAIL:${client.email}
TEL;TYPE=CELL:${client.phone}
URL:${client.website}
NOTE:${client.description}
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${client.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.vcf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    setShowSaveModal(false)
    setTimeout(() => {
      setShowShareModal(true)
    }, 500)
  }

  const handleReceiveEmail = () => {
    setShowEmailModal(true)
    setShowSaveModal(false)
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/mqaqqpnv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: email,
          from: 'maihany104@gmail.com',
          subject: `Contact Details - ${client.name}`,
          body: `
Contact Details:

Name: ${client.name}
Email: ${client.email}
Phone: ${client.phone}
Company: ${client.companyName}
Position: ${client.title}
Website: ${client.website}

Description: ${client.description}
          `
        })
      })
      
      if (response.ok) {
        setShowEmailModal(false)
        setSuccessMessage(`Contact details sent to: ${email}`)
        setShowSuccessModal(true)
        setTimeout(() => {
          setShowShareModal(true)
        }, 2000)
      } else {
        setSuccessMessage('Error sending email. Please try again.')
        setShowSuccessModal(true)
      }
    } catch (error) {
      console.error('Error:', error)
      setSuccessMessage('Error sending email. Please try again.')
      setShowSuccessModal(true)
    }
  }

  const handleShareContact = async (e) => {
    e.preventDefault()
    
    const date = new Date()
    const contactData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      jobTitle: formData.jobTitle,
      company: formData.company,
      contactedPerson: client.name,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    }
    
    try {
      const response = await fetch('https://formspree.io/f/mqaqqpnv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'maihany104@gmail.com',
          subject: `Contact Shared from ${formData.firstName} ${formData.lastName}`,
          body: `
Contact Shared By:
----------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Job Title: ${formData.jobTitle}
Company: ${formData.company}

Person Contacted: ${client.name}
Date: ${date.toLocaleDateString()}
Time: ${date.toLocaleTimeString()}
          `
        })
      })
      
      if (response.ok) {
        setShowShareModal(false)
        setSuccessMessage('Thank you for sharing your contact information!')
        setShowSuccessModal(true)
      } else {
        setSuccessMessage('Error sending information. Please try again.')
        setShowSuccessModal(true)
      }
    } catch (error) {
      console.error('Error:', error)
      setSuccessMessage('Error sending information. Please try again.')
      setShowSuccessModal(true)
    }
  }

  return (
    <div className="container">
      <div className="business-card-container">
        <CardHeader client={client} />
        <CardInfo client={client} />
        <CardContacts client={client} />
        <SaveContactButton onClick={handleSaveContact} />
      </div>

      <PoweredBy />

      <SaveContactModal 
        show={showSaveModal}
        onHide={() => setShowSaveModal(false)}
        onDownload={handleDownloadVCF}
        onEmailRequest={handleReceiveEmail}
      />

      <EmailModal 
        show={showEmailModal}
        onHide={() => setShowEmailModal(false)}
        email={email}
        setEmail={setEmail}
        onSubmit={handleEmailSubmit}
      />

      <ShareModal 
        show={showShareModal}
        onHide={() => setShowShareModal(false)}
        client={client}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleShareContact}
      />

      <SuccessModal 
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        message={successMessage}
      />
    </div>
  )
}

export default BusinessCard
