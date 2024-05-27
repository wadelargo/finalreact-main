import { useState } from 'react'
import './App.css'

function App() {
  const [rhoseBoys, setRhoseBoys] = useState([]);

  function handleAddrhoseBoys(){
    const bfInput = document.getElementById('bfInput').value;
    document.getElementById('bfInput').value = ""

    setRhoseBoys(bf => [...bf, bfInput]);

  }


  function handleRemoverhoseBoys(index) {
    setRhoseBoys(rhoseBoys.filter((el, i) => i !== index));
  }

  return(
    <div className="container">
      <h1>gf koh</h1>
      <ul>
        {rhoseBoys.map((bf, index) => (
          <li 
            key={index}
            className="item"
            onClick={() => handleRemoverhoseBoys(index)} 
          >
            {bf}
          </li>
        ))}
      </ul>
      <input type="text" id="bfInput" placeholder='Type bf name' />
      <button onClick={handleAddrhoseBoys}> Add New </button>
    </div>
  );
}

export default App;