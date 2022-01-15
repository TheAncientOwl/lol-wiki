import '../scss/MinCard.scss';

export const MinCard = ({ id, avatarURL, name, tags, blurb }) => {
  return (
    <div className='card lol-card'>
      <img src={avatarURL} alt={name} className='card-img-top lol-card-img' />
      <div className='card-body lol-card-body'>
        <h6 className='card-title lol-card-title'>{name}</h6>
        <p className='card-text lol-blurb'>
          <span className='lol-text-tab' />
          {blurb}
        </p>
      </div>
    </div>
  );
};
