import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(5)

  function  increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h2>{likes}</h2>
      <button onClick={increment}>IN</button>
      <button onClick={decrement}>DEL</button>
    </div>
  );
}
export default App;