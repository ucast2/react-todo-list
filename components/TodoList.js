import React, { Component } from "react"

class TodoList extends Component
{
  render()
  {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            // React requires a unique key in order
            // to keep track of multiple elements
            return <li key={todo.id}>{todo.text}</li>
          })
        }
      </ul>
    )
  }
}

export default TodoList
