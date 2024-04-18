import React from 'react'

const User = ({name}) => {
  return (
    <div className='user-card'>
        <h2>Name: {name}</h2>
        <h3>Loc: Koratty</h3>
        <h4>Contact: @yadhu37</h4>
    </div>
  )
}

export default User