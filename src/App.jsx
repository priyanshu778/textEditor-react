
import { useState } from 'react';
import './App.css'


function App() {
  const [inputValue,setInputValue]=useState('');
    const handleChange=(e)=>{
        let hand=e.target.value;
         let res=/[a-zA-Z0-9]*&()/g

          if(res!==hand){
            setInputValue(hand.replace(/[^a-zA-Z0-9]/g, ' '));
          }
          else{
            setInputValue(res);
          }
    }

  return (
    <>
       <div className='container'>{inputValue}</div>
            <input type="text"
            placeholder='Enter text here' 
            value={inputValue}
            onChange={handleChange}/>
        
    </>
  )
}

export default App
