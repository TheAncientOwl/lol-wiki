import { useState } from 'react';
import ImageGallery from 'react-image-gallery';

export const BigCardSkins = ({ skins, championName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = skins.map(skin => ({ original: skin.imageURL, thumbnail: skin.imageURL }));

  return (
    <div className='big-card-skins-container'>
      <h5 className='big-card-skins-title text-light-gray'>Skins</h5>
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />
      <div className='big-card-skins-info'>
        <span className='big-card-skins-separator'></span>
        <h6 className='badge big-card-skins-skin-title'>Akshan</h6>
        <span className='big-card-skins-separator'></span>
      </div>
    </div>
  );
};
