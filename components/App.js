import React, { Component } from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList";
import { connect } from "react-redux";

class App extends Component
{
  render()
  {
    return ( // 'class' is 'className' in React
      <div>
        <h1>Todo List</h1>
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList todos={this.props.todos}/>
      </div>
    )
  }
}

// return the part of state needed for this component
// complete state returned to App component
function mapStateToProps(state)
{
  return state;
}

// Export connected App Component
// that is getting state passed in as props
export default connect(mapStateToProps)(App);
// connect() also gives access to 'this.props.dispatch'
// which we are passing to TodoList
