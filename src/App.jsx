import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'

function App() {
  // const [count, setCount] = useState(0)
  const [mode, setMode] = useState('light');
  

const toggleMode = ()=>{

  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    
  }
}
  

  return (
    
    <>
    <Navbar mode = {mode} toggleMode = {toggleMode}/>
    <Textform/>
      
       
    </>
  )
}

export default App
