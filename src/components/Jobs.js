import React from 'react'

const Jobs = () => {
  return (
    <div className='combos-container'>
      <p>FILTER BY:</p>
      <select>
        <option value="locations">ALL LOCATIONS</option>
      </select>
      <select>
        <option value="teams">ALL TEAMS</option>
      </select>
      <select>
        <option value="types">ALL WORK TYPES</option>
      </select>
    </div>
  )
}

export default Jobs;
