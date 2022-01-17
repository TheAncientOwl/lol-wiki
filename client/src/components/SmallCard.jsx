import React from 'react';

export const SmallCard = ({ id, number, avatarURL, name, tags, blurb }) => {
  return (
    <div className='card small-card'>
      <div className='small-card-number'>{number}</div>

      <div style={{ position: 'relative' }}>
        <img src={avatarURL} alt={name} className='card-img-top small-card-img' />
        <h6 className='small-card-read-more'>read more</h6>
      </div>

      <div className='card-body small-card-body'>
        <h6 className='card-title small-card-title'>{name}</h6>
        <p className='card-text small-card-blurb'>
          <span className='small-card-tab' />
          {blurb}
        </p>

        <div className='small-card-tags'>
          {tags.map(tag => (
            <span className='badge small-card-tag'>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
