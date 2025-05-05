import { X, Send } from 'react-bootstrap-icons'

const ShareModal = ({ show, onHide, client, formData, setFormData, onSubmit }) => {
  if (!show) return null

  return (
    <div className="modal-backdrop-custom">
      <div className="custom-modal share-modal">
        <button className="close-button skip" onClick={onHide}>
          Skip
        </button>
        
        <div className="modal-content-custom">
          <div className="share-header mb-4">
            <div 
              className="share-avatar" 
              style={{
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '50%'
              }}
            >
              <img 
                src="/omar-profile.png" 
                alt="Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }} 
              />
            </div>
            <h5 style={{
              marginLeft: '16px',
              fontSize: '1.1rem'
            }}>
              Share your contact information with<br/>Eng. Ahmed Al-Khazraji
            </h5>
          </div>
          
          <form onSubmit={onSubmit}>
            <div className="form-row mb-3">
              <input
                type="text"
                className="form-input"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                name="firstName"
                required
              />
              <input
                type="text"
                className="form-input"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                name="lastName"
                required
              />
            </div>
            
            <input
              type="email"
              className="form-input mb-3"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              name="email"
              required
            />
            
            <input
              type="tel"
              className="form-input mb-3"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              name="phone"
            />
            
            <input
              type="text"
              className="form-input mb-3"
              placeholder="Job title"
              value={formData.jobTitle}
              onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
              name="jobTitle"
            />
            
            <input
              type="text"
              className="form-input mb-4"
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              name="company"
            />
            
            <button type="submit" className="modal-btn primary">
              <Send size={18} className="me-2" style={{transform: 'rotate(-30deg)'}} />
              Send
            </button>
            
            <p className="privacy-note mt-3">We don't sell your contact details</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
