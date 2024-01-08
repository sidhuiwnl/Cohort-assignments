import React from 'react'

function Card({cards}) {
  
  return (
    
    <div>
     {
        cards.map((card,index) =>(
          <div key={index}>
            <h1>Name: {card.name}</h1>
            <h2>Description: {card.description}</h2>
            <h2>Interest: {card.interest}</h2>
            <h3>GithubLink: {card.githublink}</h3>
          </div>
            
        ))
     }
    </div>
  )
}

export default Card
