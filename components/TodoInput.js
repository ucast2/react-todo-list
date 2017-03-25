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

  handleSubmit(event)
  {
    // stops the default action of an element from happening
    event.preventDefault();
    // call dispatch, which takes an action: 'addTodo'
    // the action takes the text of the todo ---V
    this.props.addTodo(this.state.inputText);
  }

  render()
  {
    // using a form instead of just a button (to recognize Enter key)
    return (                              // v­ bind(this)
            <div>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                  type="text"
                  placeholder="Type in your todo"
                  value={this.state.inputText}
                  onChange={this.handleChange.bind(this)}
                />
                <input type="submit" text='Submit'/>
              </form>
            </div>
    ) // TextDisplay will have this.props.text, which will be equal to inputText
  }
}

export default TodoInput
