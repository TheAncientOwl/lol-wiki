import '../scss/MinCard.scss';

export const MinCard = ({ id, number, avatarURL, name, tags, blurb }) => {
  return (
    <div className='card lol-card'>
      <div className='lol-card-number'>{number}</div>
      <div style={{ position: 'relative' }}>
        <img src={avatarURL} alt={name} className='card-img-top lol-card-img' />
        <h6 className='lol-read-more-overlay'>read more</h6>
      </div>
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
