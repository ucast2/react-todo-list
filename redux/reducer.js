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
    default:  // no change in state
      return state;
  }
}

export default reducer;
