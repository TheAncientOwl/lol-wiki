import React from 'react';

export const SmallCard = ({ id, number, avatarURL, name, tags, blurb, onClick }) => {
  return (
    <div className='card small-card border-gold' onClick={onClick}>
      <div className='small-card-number bg-black text-light-gray border-gold'>{number}</div>

      <div style={{ position: 'relative' }}>
        <img src={avatarURL} alt={name} className='card-img-top small-card-img' />
        <h6 className='small-card-read-more'>read more</h6>
      </div>

      <div className='card-body position-relative bg-dark-blue' style={{ display: 'flex', flexDirection: 'column' }}>
        <h6 className='card-title border-gold small-card-title'>{name}</h6>
        <p className='card-text small-card-blurb'>
          <span className='text-tab' />
          {blurb}
        </p>

        <div style={{ flexGrow: 1 }} />

        <div className='small-card-tags'>
          {tags.map(tag => (
            <span className='badge bg-black text-light-gray small-card-tag'>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
