import { useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

function App() {
  let sendMessage = () => {
    socket.emit("send_message",{message:"Hellow"})
  };

  useEffect(()=>{
    socket.on("receive_meaasge",(data)=>{
      alert(data.message)
    },[socket])
  })
  return (
    <div>
      <input type="text" name="" id="" placeholder="message" />
      <button onClick={sendMessage}>send message</button>
    </div>
  );
}

export default App;
