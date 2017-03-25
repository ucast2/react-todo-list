import React, { Component } from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../redux/actions";
import UserInfo from "./UserInfo";

class App extends Component
{
  render()
  {
    return ( // 'class' is 'className' in React
      <div>
        <h1>Todo List</h1>
        <UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId}/>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
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

// Don't have to pass dispatcher down
// just pass actions wrapped w/ dispatcher
function mapDispatchToProps(dispatch)
{
  return {
    // wrap actions w/ dispatcher
    actions: bindActionCreators(actions, dispatch)
  }
}

// Export connected App Component
// that is getting state passed in as props
// State passed in to first --v  Dispatch passed in -v
export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect() also gives access to 'this.props.dispatch'
// which we are passing to TodoList
