import { CheckCircle, X } from 'react-bootstrap-icons'

const SuccessModal = ({ show, onHide, message }) => {
  if (!show) return null

  return (
    <div className="modal-backdrop-custom">
      <div className="custom-modal success-modal">
        <button className="close-button" onClick={onHide}>
          <X size={20} className="icon-with-hover" />
        </button>
        
        <div className="modal-content-custom">
          <div className="success-icon mb-3">
            <CheckCircle size={48} color="#0F9D58" />
          </div>
          <h5 className="mb-4">Success!</h5>
          <p className="mb-4">{message}</p>
          <button
            className="modal-btn primary"
            onClick={onHide}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
