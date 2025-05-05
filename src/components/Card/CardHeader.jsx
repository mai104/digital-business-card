const CardHeader = ({ client }) => {
  return (
    <div className="cover-header">
      {/* Background cover image - full width */}
      <div className="cover-background" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        overflow: 'hidden'
      }}>
        {/* Full cover image */}
        <img 
          src="/gavel.png" 
          alt="Cover" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} 
        />
      </div>
      
      {/* Profile section - no more gaps */}
      <div className="profile-section">
        <div className="profile-frame">
          <div className="profile-image" style={{
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: '50%'
          }}>
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
        </div>
        
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '20px'
        }}>
          <div className="company-card" style={{
            width: '156px',
            height: '88px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '0'
          }}>
            {/* Company card will use actual image from public folder */}
            <img 
              src="/company-card.png" 
              alt="Company Card" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHeader
