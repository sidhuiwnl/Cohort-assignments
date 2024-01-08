import { useEffect, useState } from 'react'
import Links from './Links'
import Interest from './Interest'

 function Card({name,desc,links,interest}) {
  const [img , setImg] = useState("")
  useEffect(() =>{
    fetch('https://api.github.com/users/sidhuiwnl')
    .then(res => res.json())
    .then(data => setImg(data))
  })
  return (
    <div>
      <img className='w-20 rounded'
      src={img.avatar_url}

      />
      <h1>Name: {name}</h1>
      <p>Description: {desc}</p>
      <h4>Interest:</h4>
      <Interest {...interest}/>
      <h4>Socail Media Links:</h4>
      <Links {...links}/>
      
    </div>
  )
}

export default Card
