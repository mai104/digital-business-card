import { PersonAdd } from 'react-bootstrap-icons'

const SaveContactButton = ({ onClick }) => {
  const handleClick = () => {
    console.log('SaveContactButton clicked') // Debug log
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className="save-contact-btn"
      onClick={handleClick}
    >
      <PersonAdd size={18} style={{ marginRight: '8px' }} />
      Save Contact
    </button>
  )
}

export default SaveContactButton
