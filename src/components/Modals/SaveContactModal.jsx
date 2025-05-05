import { Download, Envelope, X } from 'react-bootstrap-icons'

const SaveContactModal = ({ show, onHide, onDownload, onEmailRequest }) => {
  if (!show) return null

  return (
    <div className="modal-backdrop-custom">
      <div className="custom-modal">
        <button className="close-button" onClick={onHide}>
          <X size={20} className="icon-with-hover" />
        </button>
        
        <div className="modal-content-custom">
          <h5 className="mb-4">Download contact file or receive via email</h5>
          
          <button
            className="modal-btn primary mb-3"
            onClick={onDownload}
          >
            <Download size={18} className="me-2 icon-with-hover" />
            Save to contacts
          </button>
          
          <div className="separator">or</div>
          
          <button
            className="modal-btn secondary"
            onClick={onEmailRequest}
          >
            <Envelope size={18} className="me-2 icon-with-hover" />
            Receive contact via email
          </button>
        </div>
      </div>
    </div>
  )
}

export default SaveContactModal
