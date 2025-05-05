import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Envelope, Telephone, Whatsapp, Person } from 'react-bootstrap-icons'
import { clients } from '../data/clients'

const BusinessCard = () => {
  const client = clients[0]
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const handleSaveContact = () => {
    setShowSaveModal(true)
  }

  const handleDownloadVCF = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${client.name}
ORG:${client.company}
TITLE:${client.title}
EMAIL:${client.email}
TEL;TYPE=CELL:${client.phone}
URL:https://wa.me/${client.whatsapp.replace('+', '')}
NOTE:${client.description}
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${client.name}.vcf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    setShowSaveModal(false)
    setShowShareModal(true)
  }

  const handleReceiveEmail = async (e) => {
    e.preventDefault()
    // Here you would send the email to the user
    alert(`Contact will be sent to: ${email}`)
    setShowSaveModal(false)
    setShowShareModal(true)
  }

  const handleShareContact = async (e) => {
    e.preventDefault()
    const contactData = {
      ...formData,
      contactedPerson: client.name,
      date: new Date().toISOString()
    }
    
    // Here you would send the data to your email
    console.log('Sending contact:', contactData)
    setShowShareModal(false)
  }

  return (
    <div className="container">
      <div className="business-card-container">
        {/* Cover Header */}
        <div className="cover-header">
          <div className="cover-left">
            <img src="/maather-logo.png" alt="MAATHER" className="cover-logo" />
          </div>
          <div className="cover-right">
            <img src="/gavel.png" alt="Gavel" className="gavel-image" />
          </div>
          
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-frame">
              <img src="/omar-profile.png" alt="Omar Alalaiwi" className="profile-image" />
            </div>
            <div className="company-card">
              <img src="/company-card.png" alt="Company Card" />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="card-content">
          <h1 className="name-title">{client.name}</h1>
          <h2 className="position">{client.title}</h2>
          
          <p className="license-text">"{client.arabicLicense}"</p>
          <p className="arabic-description">"{client.arabicDescription}"</p>
          
          <div className="description-box">
            <p className="description-text">"{client.description}"</p>
          </div>
          
          <div className="contact-list">
            <a href={`mailto:${client.email}`} className="contact-item">
              <div className="contact-icon">
                <Envelope size={20} />
              </div>
              <div>
                <div className="contact-text">{client.email}</div>
                <div className="contact-label">Work</div>
              </div>
            </a>
            
            <a href={`tel:${client.phone}`} className="contact-item">
              <div className="contact-icon">
                <Telephone size={20} />
              </div>
              <div>
                <div className="contact-text">{client.phone}</div>
                <div className="contact-label">Work</div>
              </div>
            </a>
            
            <a href={`https://wa.me/${client.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">
                <Whatsapp size={20} />
              </div>
              <div>
                <div className="contact-text">Connect with me on WhatsApp</div>
              </div>
            </a>
          </div>
          
          <Button onClick={handleSaveContact} className="save-contact-btn">
            <Person size={20} className="me-2" />
            Save Contact
          </Button>
        </div>
      </div>

      {/* Save Contact Modal */}
      <Modal show={showSaveModal} onHide={() => setShowSaveModal(false)} centered className="save-contact-modal">
        <Modal.Body className="p-4 text-center">
          <Button 
            variant="link" 
            className="position-absolute end-0 top-0 text-dark p-2" 
            onClick={() => setShowSaveModal(false)}
            style={{top: '10px', right: '10px'}}
          >
            ×
          </Button>
          
          <Button variant="dark" className="w-100 mb-3 py-3" onClick={handleDownloadVCF}>
            <Person className="me-2" />
            Save to contacts
          </Button>
          
          <div className="text-center text-muted mb-3">or</div>
          
          <Button variant="dark" className="w-100 py-3" onClick={() => {
            setShowSaveModal(false)
            const emailModal = new bootstrap.Modal(document.getElementById('emailModal'))
            emailModal.show()
          }}>
            <Envelope className="me-2" />
            Receive contact via email
          </Button>
        </Modal.Body>
      </Modal>

      {/* Email Input Modal */}
      <div id="emailModal" className="modal fade" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{borderRadius: '16px'}}>
            <div className="modal-body p-4 text-center">
              <Button 
                variant="link" 
                className="position-absolute end-0 top-0 text-dark p-2" 
                onClick={() => {
                  const emailModal = bootstrap.Modal.getInstance(document.getElementById('emailModal'))
                  emailModal.hide()
                }}
                style={{top: '10px', right: '10px'}}
              >
                ×
              </Button>
              
              <h5 className="mb-4">Enter your email to receive contact</h5>
              
              <form onSubmit={handleReceiveEmail}>
                <input
                  type="email"
                  className="form-control mb-4"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{padding: '12px', borderRadius: '8px'}}
                />
                <Button type="submit" variant="dark" className="w-100 py-3" style={{borderRadius: '8px'}}>
                  <Envelope className="me-2" />
                  Receive
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Share Your Contact Modal */}
      <Modal show={showShareModal} onHide={() => setShowShareModal(false)} centered className="share-contact-modal">
        <Modal.Body className="p-4">
          <Button 
            variant="link" 
            className="position-absolute end-0 top-0 text-dark p-2" 
            onClick={() => setShowShareModal(false)}
            style={{top: '10px', right: '10px'}}
          >
            Skip
          </Button>
          
          <div className="text-center mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src="/omar-profile.png" alt="Omar" style={{width: '60px', height: '60px', borderRadius: '50%', marginRight: '12px'}} />
              <h5 className="mb-0">Share your contact information with Omar</h5>
            </div>
          </div>
          
          <form onSubmit={handleShareContact}>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  style={{padding: '12px', borderRadius: '8px'}}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  style={{padding: '12px', borderRadius: '8px'}}
                />
              </div>
            </div>
            
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              style={{padding: '12px', borderRadius: '8px'}}
            />
            
            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={{padding: '12px', borderRadius: '8px'}}
            />
            
            <Button variant="outline-secondary" className="w-100 mb-3 py-3" style={{borderRadius: '8px'}}>
              Add more information
            </Button>
            
            <Button type="submit" variant="dark" className="w-100 py-3" style={{borderRadius: '8px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send me-2" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
              </svg>
              Send
            </Button>
            
            <p className="text-center text-muted small mt-3">We don't sell your contact details</p>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default BusinessCard
