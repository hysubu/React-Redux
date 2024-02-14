import React from 'react'
import './App.css'
 import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'

const App = () => {
  return (
    <div className='container'>
      {/* <h2> Welcome To ReactRedux App</h2>


      
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux </h4>
     



      <div className='quantity'>
        <a href="" className='quantity_minus' title='Decrement'><span> - </span></a>
        <input type="text"  className = "quantity_input" name="quantity" id="" value="0" />
        <a href="" className='quantity_plus' title='Increment'> <span> + </span></a>


      </div> */}


      <Navbar/>
      <UserDetails/>
        </div>
  )
}

export default App