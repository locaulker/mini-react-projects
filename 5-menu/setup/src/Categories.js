import React from 'react'

const Categories = ({ filteredItems }) => {
  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => filteredItems('all')}>
        All
      </button>
      <button className='filter-btn' onClick={() => filteredItems('breakfast')}>
        Breakfast
      </button>
    </div>
  )
}

export default Categories
