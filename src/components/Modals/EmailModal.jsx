import { Envelope, Send, X } from 'react-bootstrap-icons'

const EmailModal = ({ show, onHide, email, setEmail, onSubmit }) => {
  if (!show) return null

  return (
    <div className="modal-backdrop-custom">
      <div className="custom-modal">
        <button className="close-button" onClick={onHide}>
          <X size={20} className="icon-with-hover" />
        </button>
        
        <div className="modal-content-custom">
          <h5 className="mb-4">Enter your email to receive contact</h5>
          
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="email-input"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
            <button type="submit" className="modal-btn primary mt-3">
              <Send size={18} className="me-2" style={{transform: 'rotate(-30deg)'}} />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailModal
