import React from 'react'

function Filter({onTitleChange,onRateChange}) {
  return (
    <div>
      <label htmlFor="title-filter">Title:</label>
      <input
        type="text"
        id="title-filter"
        onChange={(e) => onTitleChange(e.target.value)}
      />

      <label htmlFor="rate-filter">Rate:</label>
      <input
        type="number"
        id="rate-filter"
        min="0"
        max="10"
        onChange={(e) => onRateChange(e.target.value)}
      />
    </div>
  )
}

export default Filter
