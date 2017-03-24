import React, { Component } from "react"

class TodoInput extends Component
{
  constructor(props, context)
  {
    super(props, context);

    this.state = {
      inputText: ''
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
                placeholder="Type in your todo"
                value={this.state.inputText}
                onChange={this.handleChange.bind(this)}
              />
              <button>Submit</button>
            </div>
    ) // TextDisplay will have this.props.text, which will be equal to inputText
  }
}

export default TodoInput
