import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() { 
  const [jokes,setJokes] = useState([]);
  const [intial,setIntial] = useState(0);
  const getJokes = async() => {
    const response = await axios.get('/api/jokes');
    const jokes = response.data;
    setJokes(jokes);
  }

  useEffect(() => {
    getJokes();
  },[]);

  const setIntialValue = (val) => {
    if(val){
      if(intial+1 == jokes.length){
        setIntial(0);
      }else{
        setIntial(intial + 1);
      }
    }else{
      if(intial > 0){
        setIntial(intial - 1);
      }else{
        setIntial(jokes.length-1);
      }
    }
  }

  return (
    <div>
      <h1>Hello Jokes</h1>
        {jokes.length > 0 && <p>{jokes[intial].joke}</p>}
      <div>
        <button onClick={() => setIntialValue(0)}>Prev</button>
        <button onClick={() => setIntialValue(1)}>Next</button>
      </div>
    </div>
  )
}

export default App
