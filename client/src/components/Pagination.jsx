export const Pagination = ({ currentPage, onPageChange, pagesCount }) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const prevClass = prevPage === 0 ? 'page-item disabled pagination-tile-off' : '';
  const nextClass = nextPage === pagesCount + 1 ? 'page-item disabled pagination-tile-off' : '';

  return (
    <nav aria-label='Pagination'>
      <ul className='pagination'>
        <li className={prevClass} onClick={() => onPageChange(1)}>
          <button className='page-link'>
            <span>&laquo;</span>
          </button>
        </li>

        <li className={prevClass} onClick={() => onPageChange(prevPage)}>
          <button className='page-link'>{prevPage}</button>
        </li>
        <li className='page-item active'>
          <button className='page-link'>{currentPage}</button>
        </li>
        <li className={nextClass} onClick={() => onPageChange(nextPage)}>
          <button className='page-link'>{nextPage}</button>
        </li>

        <li className={nextClass} onClick={() => onPageChange(pagesCount)}>
          <button className='page-link'>
            <span>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
