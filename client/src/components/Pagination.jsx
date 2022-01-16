export const Pagination = ({ currentPage, onPageChange, pagesCount }) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const toPrevPage = () => onPageChange(prevPage);
  const toNextPage = () => onPageChange(nextPage);

  const prevClass = prevPage === 0 ? 'page-item disabled' : '';
  const nextClass = nextPage === pagesCount + 1 ? 'page-item disabled' : '';

  return (
    <nav aria-label='Pagination'>
      <ul className='pagination'>
        <li className={prevClass}>
          <button className='page-link' onClick={() => onPageChange(1)}>
            First page
          </button>
        </li>

        <li className={prevClass} onClick={toPrevPage}>
          <button className='page-link'>
            <span>&laquo;</span>
          </button>
        </li>

        <li className={prevClass} onClick={toPrevPage}>
          <button className='page-link'>{prevPage}</button>
        </li>
        <li className='page-item active'>
          <button className='page-link'>{currentPage}</button>
        </li>
        <li className={nextClass} onClick={toNextPage}>
          <button className='page-link'>{nextPage}</button>
        </li>

        <li className={nextClass} onClick={toNextPage}>
          <button className='page-link'>
            <span>&raquo;</span>
          </button>
        </li>

        <li className={nextClass}>
          <button className='page-link' onClick={() => onPageChange(pagesCount)}>
            Last page
          </button>
        </li>
      </ul>
    </nav>
  );
};
