import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="App">
        <header>
          <h1>Counter App using React</h1>
        </header>
        <h2>Current value: {count}</h2>
        <button
          onClick={() => {
            setCount(0)
          }}
        >
          Reset Counter
        </button>
        <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>
          Increase Counter
        </button>
        <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>
          Decrease Counter
        </button>
      </div>
    </div>
  )
}

export default App
