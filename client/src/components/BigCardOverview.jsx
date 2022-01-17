export const BigCardOverview = ({ allyTips, enemyTips, info, stats, lore }) => {
  return (
    <div className='big-card-overview-container'>
      <div className='big-card-overview-tags'>
        <span className='badge bg-dark-gold text-light'>attack: {info.attack}</span>
        <span className='badge bg-dark-gold text-light'>defense: {info.defense}</span>
        <span className='badge bg-dark-gold text-light'>magic: {info.magic}</span>
        <span className='badge bg-dark-gold text-light'>difficulty: {info.difficulty}</span>
      </div>
      <div className='big-card-overview-tags'>
        <span className='badge bg-medium-blue text-light-gray'>health points: {stats.hp}</span>
        <span className='badge bg-medium-blue text-light-gray'>magic power: {stats.mp}</span>
        <span className='badge bg-medium-blue text-light-gray'>move speed: {stats.movespeed}</span>
        <span className='badge bg-medium-blue text-light-gray'>armor: {stats.armor}</span>
        <span className='badge bg-medium-blue text-light-gray'>attack range: {stats.attackrange}</span>
        <span className='badge bg-medium-blue text-light-gray'>attack damage: {stats.attackdamage}</span>
        <span className='badge bg-medium-blue text-light-gray'>attack speed: {stats.attackspeed}</span>
      </div>
    </div>
  );
};
