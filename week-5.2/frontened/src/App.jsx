import Input from './components/Input'
import Card from './components/Card'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [cards,setCards] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/Cards')
    .then(res => res.json())
    .then(data => setCards(data))
  },[cards])

  return (
    <>
     <Input />
     <Card cards = {cards}></Card>
    </>
  )
}

export default App
