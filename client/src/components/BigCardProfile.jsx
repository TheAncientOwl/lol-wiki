import '../scss/BigCardProfile.scss';

export const BigCardProfile = ({ avatarURL, name, title }) => {
  return (
    <div className='big-card-profile-container'>
      <img className='big-card-profile-avatar' src={avatarURL} alt={name} />
      <div>
        <h5 className='big-card-profile-name'>{name}</h5>
        <h6 className='big-card-profile-title'>{title}</h6>
      </div>
    </div>
  );
};