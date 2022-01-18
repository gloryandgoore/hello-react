import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  
  return (
    <button onClick={props.onClick}>{props.name}</button>


  );
};

const Application = () => {
 const [name, setName] = useState(" ");

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
   

    <main>
  <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
    
      {/* your code here -- this entire line including the curly braces can be removed */}
      <Button name="Reset" onClick={reset}>
      
      </Button>
      <h1>Hello {name}</h1>
      
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
