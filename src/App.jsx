import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMsg, setGreetingMsg] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMsg("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setGreetingMsg("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setGreetingMsg("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
