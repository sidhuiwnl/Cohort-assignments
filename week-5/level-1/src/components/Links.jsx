import React from 'react'

function Links({InstagramLink,LinkedIn,GithubLink}) {
  return (
    <div>
      <a>Instagram: {InstagramLink}</a><br />
      <a>LinkedIn: {LinkedIn}</a><br />
      <a>Github: {GithubLink}</a><br />
    </div>
  )
}

export default Links
