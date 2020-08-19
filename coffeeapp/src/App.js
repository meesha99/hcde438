import React from 'react';
import './App.css';


function App() {
  const sidebarTitle = 'Daily Menu'
  const rightnow = new Date().toString()
  .split(" ")
  .slice(0, 4)
  .join(" ")

  const menu = {
    coffee: [
      { name: 'Espresso', price: 3.99},
      { name: 'Cafe Latte', price: 3.50},
      { name: 'Drip Coffee', price: 1.99},
      { name: 'Iced Coffee', price: 2.99},
      { name: 'Cold Brew Coffee', price: 4.99},
      { name: 'Cafe Americano', price: 2.99},
      { name: 'Cafe Mocha', price: 4.50},
  
    ],
    bakery: [
      { name: 'Blueberry Scone', price: 2.99},
      { name: 'Pumpkin Muffin', price: 4.50},
      { name: 'Cinnamon Raisin Bagel', price: 2.99},
    ]
  }

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Sidebar
      title={sidebarTitle}
      now={rightnow}
      menu={menu}
      />
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <div className="App--navbar">
      <h1>CozyBrew Coffee Company</h1>
        <div style={{display:'flex',alignItems:'center'}}>
        <p class="aligncenter"> 
          <img src="./images/cozybrew.png" alt="logo" height="100px" width="150px" align="center"/>
        </p>
        </div>
    </div>

  )
}

function Main(){
  return (
    <div className="App-main">
        <img src= './public/images/cozybrew.png' alt=""/>
      <h2>Main</h2>
      </div>
  )
}

function Sidebar(props){
  return(
  <div className="App--sidebar">
    <h2>{ props.title }</h2>
    <p>Last updated: { props.now } </p>
    <hr />
    <p><em>Coffee</em></p>
    <ul>
      {
        props.menu.coffee.map( (item, idx) => {
          return (
            <li className="menu-item" key={idx}>
              { item.name } <span>${item.price.toFixed(2)}</span>
            </li>
          )
        })
      }
    </ul>
 </div>
  )
}

function Footer(){
  return (
    <div className="App--footer">
      <h5>&copy; 2020 Coffee Shop Inc.</h5>
    </div>
  )
}

export default App;
