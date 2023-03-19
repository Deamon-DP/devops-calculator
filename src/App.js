import React, { useState } from 'react';
import './App.css';
// import log from './log'
import axios from "axios";
class log{
  constructor(time,expression,result)
  {
      this.time=time
      this.expression=expression
      this.result=result
  }
}
function App() {

  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState('');



  function handleClick(event) {
    const value = event.target.value;
    if (value === '=') {
      calculateResult();
    }
    else if (value === 'C') {
      clearScreen();
    }
    else if (value === 'DEL') {
      deleteLastCharacter();
    }

    else {
      if (input !== 'Error' && input !== '0') {
        setExpression(prevExpression => prevExpression + value);

        setInput(prevInput => prevInput + value);
      }
      else {
        setInput(value);
        setExpression(value);
      }
    }
  }

  const sendLogs= async (expression,result) => {  
  const logs = new log(new Date(),expression,result);
  console.log(logs);

     axios.post("http://localhost:5000/",logs)
.then(function (response) {
  console.log(response);

})
}

  function calculateResult() {
    try {

      if (input.slice(-1) === "!") {

        evaluateFactorial();
        return
      }
      else {
        // eslint-disable-next-line 
        const resultFn = Function('return ' + expression);
        
        const result = resultFn();
        //const result=eval();
        if (result === Infinity || result === -Infinity) {
          throw new Error('Cannot divide by zero');
        }
        
        sendLogs(expression,result);
        setInput(result);
      }
    } catch (error) {
      sendLogs(expression,"ERROR");
      setInput('Error');
    }
  }




  function factorial(n) { if (n === 0 || n === 1) { return 1; } else { return n * factorial(n - 1); } }



  function evaluateFactorial() {
    //eslint-disable-next-line 
     const resultFn = Function('return ' + expression.slice(0,-1));
     const n = resultFn();
    
    //eslint-disable-next-line 
    //const n=eval(expression.slice(0,-1));
    if (n >= 0) {
      //   let factorialString = "function factorial(n) { if (n === 0 || n === 1) { return 1; } else { return n * factorial(n-1); } }";

      // // Use the Function() constructor to create a new function from the string
      // let factorial = new Function(factorialString);


      let result = factorial(n);
      console.log(result);
      setExpression(result);
      setInput(result);

    }
    else {
      setInput('Error');
    }

  }

  function clearScreen() {
    setExpression('');
    setInput("0");
  }
  function deleteLastCharacter() {
    setExpression(prevExpression => prevExpression.slice(0, -1));
    setInput(prevInput => prevInput.slice(0, -1));
  }


  return (
    <div data-testid="calculator" className="calculator">
      <div className="input">{input}</div>
      <div className="row">
        <button className="button" id="open-bracket" value="(" onClick={handleClick}>(</button>
        <button className="button" id="close-bracket" value=")" onClick={handleClick}>)</button>
        <button className="button" id="pi" value="Math.PI" onClick={handleClick}>π</button>
        <button className="button" id="exponent" value="Math.E" onClick={handleClick}>e</button>
        <button className="button" id="factorial" value="!" onClick={handleClick}>!</button>

      </div>
      <div className="row">
        <button className="button" id="sin" value="Math.sin(" onClick={handleClick}>sin</button>
        <button className="button" id="cos" value="Math.cos(" onClick={handleClick}>cos</button>
        <button className="button" id="tan" value="Math.tan(" onClick={handleClick}>tan</button>
        <button className="button" id="log" value="Math.log10(" onClick={handleClick}>log</button>
        <button className="button" id="exponent" value="Math.exp(" onClick={handleClick}>exp</button>

      </div>
      <div className="row">
        <button className="button" id="absolute" value="Math.abs(" onClick={handleClick}>|x|</button>
        <button className="button" id="floor" value="Math.floor(" onClick={handleClick}>⌊x⌋</button>
        <button className="button" id="ceil" value="Math.ceil(" onClick={handleClick}>⌈x⌉</button>
        <button className="button" id="sqrt" value="Math.sqrt(" onClick={handleClick}>√</button>

        <button className="button" id="power" value="**" onClick={handleClick}>^</button>

      </div>
      <div className="row">
        <button className="button" value="7" onClick={handleClick}>7</button>
        <button className="button" value="8" onClick={handleClick}>8</button>
        <button className="button" value="9" onClick={handleClick}>9</button>
        <button className="button" id="clear" value="C" onClick={handleClick}>AC</button>
        <button className="button" id="delete" value="DEL" onClick={handleClick}>DEL</button>

      </div>
      <div className="row">
        <button className="button" value="4" onClick={handleClick}>4</button>
        <button className="button" value="5" onClick={handleClick}>5</button>
        <button className="button" value="6" onClick={handleClick}>6</button>
        <button className="button" id="multiply" value="*" onClick={handleClick}>*</button>
        <button className="button" id="divide" value="/" onClick={handleClick}>/</button>

      </div>
      <div className="row">
        <button className="button" value="1" onClick={handleClick}>1</button>
        <button className="button" value="2" onClick={handleClick}>2</button>
        <button className="button" value="3" onClick={handleClick}>3</button>
        <button className="button" id="add" value="+" onClick={handleClick}>+</button>
        <button className="button" id="minus" value="-" onClick={handleClick}>-</button>
      </div>
      <div className="row">
        <button className="button" value="0" onClick={handleClick}>0</button>
        <button className="button" value="." onClick={handleClick}>.</button>
        <button className="button" id="mod" value="%" onClick={handleClick}>%</button>

        <button className="equals-button" id="equals" value="=" onClick={handleClick}>=</button>

      </div>

    </div>
  );
}

export default App;


