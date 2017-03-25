// loop through todos looking for the max Id number
// Add 1 to return unique ID
function getId(state)
{
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
}

// reducers take in the current state and an action
// return new state
let reducer = function(state, action)
{
  switch (action.type)
  {
    case 'ADD_TODO':
      console.log("running ADD_TODO case");
      // create new object: '{}'
      // include all data from current state: 'state'
      // modify todos object
      return Object.assign({}, state, {
        // create new todos object
        // add a new todo: '{}'
        // append other todos to new todos object: '...state.todos'
        todos: [{
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      })
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ? // the correct todo
            // return a new object which is the same todo + the complete property
            // or ':' just the same todo
            Object.assign({}, todo, {completed: !todo.completed}) : todo
        })
      })
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          // return true for all except target todo
          return todo.id !== action.id
        })
      })
    case 'CREATE_USER_ID':
      return Object.assign({}, state, {
        user: {
          username: state.user.username,
          id: action.id
        }
      })
    default:  // no change in state
      return state;
  }
}

export default reducer;
