import React, { useState } from 'react';
import './App.css';
import Footer from './footer';
import Message from './message';

function App() {
  const [messages,setMessages] = useState([])
  return (
    <main className="main">
      <header>
      <img src="https://cdn.dribbble.com/users/420317/screenshots/6195864/friend.jpg" alt="logo"/>
        <span>Chat App</span>
      </header>
    
      {messages.map((m,i)=> <Message key={i} text={m} />)}

      <Footer 
        onSend={(text)=> setMessages([...messages,text])}
        color="purple"
      
        />

    </main>
  )
}

export default App;
