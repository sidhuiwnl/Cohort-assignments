import  { useState } from 'react'

function Input() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [interest, setInterest] = useState("");
    const [githubLink, setGithubLink] = useState("");
  return (
    <div>
      <input
      type='text'
      placeholder='Name'
      onChange={(e) =>{
        setName(e.target.value)
      }}
      ></input><br></br>
       <input
      type='text'
      placeholder='description'
      onChange={(e) =>{
        setDescription(e.target.value)
      }}
      
      ></input><br></br>
       <input
      type='text'
      placeholder='Interest'
      onChange={(e) =>{
        setInterest(e.target.value)
      }}
      
      ></input><br></br>
      <input
      type='text'
      placeholder='githubLink'
      onChange={(e) =>{
        setGithubLink(e.target.value)
      }}
      ></input><br></br>
      <button
      onClick={() =>{
        fetch("http://localhost:3000/card",{
            method : "POST",
            body : JSON.stringify({
                name : name,
                description : description,
                Interest : interest,
                githublink : githubLink,
            }),
            headers: {
                "Content-type": "application/json",
                "Content-Length": 139,

            }
        })
        .then(async(res) =>{
            await res.json()
            alert("todo added")
        })
        
      }}
      >Add the Card</button>
    </div>
  )
}

export default Input
