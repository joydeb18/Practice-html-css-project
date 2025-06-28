import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  /*
  const [brand, setBrand] = useState('Ferrari');
  const [model, setModel] = useState('Roma');
  const [year, setYear] = useState(2021);
  const [color, setColor] = useState('Red');
*/
/*
const [car, setCar]= useState({
  brand: 'Ferrari',
  model: 'Roma',
  year: 2021,
  color: 'Red'
});
*/
/*
const [count, setCount] = useState(0);

const increament = () => {

  setCount(count => count + 1);

  setCount(prev => prev + 1);

  setCount(prev => prev + 1);
}
  */

/*
//UseEffect example

const [count, setCount] = useState(0);
const [name, setName] = useState('Joy');
useEffect(() => {
  setTimeout(() => {
    setCount(count => count + 1);
  }, 2000)
}, [count], [name])
 */

//Use Effect Another Example

const [count, setCount] = useState(0);
const [color, setColor] = useState('Red');

useEffect(() => {
  document.title = `Count: ${count} ${color}`; 
}, [count, color])

function addCount() {
  setCount(c => c+1); 
}

function subCount() {
  setCount(c => c-1);
}

function changeColor() {
  setColor(c => c === 'Red' ? 'Blue' : 'Red');
}

return (

    /*
 <h1>My {car.brand}</h1>
        <h2> It is a {car.model} {car.color} from {car.year}</h2>      
(The abouve code should be within div tag)
*/
    <div>
      
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add Count</button>
    <button onClick={subCount}>Sub Count</button>
    <button onClick={changeColor}>Change Color</button>

{/*
      <h1>I have rendered {name} : {count} times!</h1>
     {/* <h1> Count: {count} </h1>
       <button onClick={increament}> Increased by </button>
    */}
    </div>
  );
}

export default App;
