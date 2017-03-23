import React, { Component } from "react"
import TextInput from "./TextInput"

class App extends Component
{
  render()
  {
    return ( // 'class' is 'className' in React
      <div>
        <h1>This is the App Component</h1>
        <TextInput/>
      </div>
    )
  }
}

export default App;
