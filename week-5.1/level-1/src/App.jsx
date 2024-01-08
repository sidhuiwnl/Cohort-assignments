
import Card from './components/Card'

import './App.css'

function App() {
  
  return (
    
    <>
    <div className='bg-slate-900 border-solid border-spacing-4 p-5 rounded w-50 h-50' >
      <div>
      <Card 
      name={"Sidharth"}
      desc={"Web developer"}
      interest = {{Interest1 : "love to play games"}}
      links = {{InstagramLink : "Insta",LinkedIn : "LinkedIn",GithubLink : "Github"}}
      
    />

      </div>
      
   
    
    </div>
    </>
  )
}

export default App
