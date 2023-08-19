
import React, { useState } from "react";
import './../styles/App.css';
import Child from "../components/Child"

const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <h1>Parent Component</h1>
      <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default App
