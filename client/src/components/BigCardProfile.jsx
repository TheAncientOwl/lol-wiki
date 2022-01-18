export const BigCardProfile = ({ avatarURL, name, title, onClose }) => {
  return (
    <section className='big-card-section big-card-profile-container' style={{ position: 'relative' }}>
      <i
        onClick={onClose}
        class='bi bi-x-circle-fill text-dark-gold'
        style={{
          position: 'absolute',
          top: '0.5em',
          right: '0.5em',
          cursor: 'pointer',
          fontSize: '1.4em',
          zIndex: 25,
        }}></i>
      <img className='big-card-profile-avatar' src={avatarURL} alt={name} />
      <div>
        <h5 className='big-card-profile-name'>{name}</h5>
        <h6 className='big-card-profile-title'>{title}</h6>
      </div>
    </section>
  );
};
