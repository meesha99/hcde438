import React, {useState} from 'react'

function Footer(props){
  console.log(props)
  const [text,setText] = useState('')
  return <footer className="footer" 
  style={{background:props.color}}>
  <input className="text-input" value={text} 
      onChange={e=> setText(e.target.value)}
      placeholder="Type message here"
    />
    <button className="send-button" 
      onClick={()=> {
      props.onSend(text)
      setText('')
    }}>
      ^
    </button>
</footer>
}

export default Footer