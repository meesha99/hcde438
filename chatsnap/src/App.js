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
    
<Message />

      <Footer hi="hello" 
        onSend={(text)=> setMessages([text])}
        color="purple"
      
        />

    </main>
  )
}

export default App;
