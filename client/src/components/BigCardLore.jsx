import { removeTags } from '../App';

export const BigCardLore = ({ lore }) => {
  return (
    <section className='big-card-section'>
      <div className='big-card-lore text-dark-gray'>
        <span className='text-tab' />
        {removeTags(lore)}
      </div>
    </section>
  );
};
