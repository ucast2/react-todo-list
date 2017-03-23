import React, { Component } from "react"
import TextDisplay from "./TextDisplay";

class TextInput extends Component
{
  constructor(props, context)
  {
    super(props, context);

    this.state = {
      inputText: 'initial text'
    }
  }

  // event that occurred passed in
  handleChange(event)
  {
    // bind(this) necessary to have access to
    this.setState({
      inputText: event.target.value
    })
  }

  render()
  {
    return (                              // v­ bind(this)
            <div>
              <input
                type="text"
                placeholder="This is going to be text"
                value={this.state.inputText}
                onChange={this.handleChange.bind(this)}
              />
              <TextDisplay text={this.state.inputText}/>
            </div>
    ) // TextDisplay will have this.props.text, which will be equal to inputText
  }
}

export default TextInput
