import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const navigateToShopHere=()=>{
    navigate('/gallery')
  }
  return (
    <div className="home_container">
      <div className="home_main">

        <h1>welcome to <i>Flower <span style={{ color: 'hotpink' }}>Shop</span></i></h1>
        <p style={{ color: 'grey' }}><i>Where every plant blooms into flower and fill your life with joy</i></p>
        <button onClick={()=>navigateToShopHere()}>Shop Here</button>
      </div>

    </div>
  )
}

export default Home