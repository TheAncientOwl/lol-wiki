import ImageGallery from 'react-image-gallery';

export const BigCardSkins = ({ skins, championName }) => {
  const images = skins.map(skin => ({ original: skin.imageURL, thumbnail: skin.imageURL }));

  return (
    <section className='big-card-section big-card-skins-container'>
      <h5 className='big-card-section-title'>Skins</h5>

      <div className='big-card-skins-gallery'>
        <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />
        <div className='big-card-skins-info'>
          <span className='big-card-skins-separator'></span>
          <h6 className='badge big-card-skins-skin-title'>Akshan</h6>
          <span className='big-card-skins-separator'></span>
        </div>
      </div>
    </section>
  );
};
