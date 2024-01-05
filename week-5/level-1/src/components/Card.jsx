import React from 'react'
import Links from './Links'
import Interest from './Interest'

function Card({name,desc,links,interest}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
      <Links {...links}/>
      <h4>Interest:</h4>
      <Interest {...interest}/>
    </div>
  )
}

export default Card
