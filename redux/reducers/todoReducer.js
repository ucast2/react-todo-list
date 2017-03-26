// loop through todos looking for the max Id number
// Add 1 to return unique ID
function getId(todos)
{
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
}

// No longer getting the entire state, just todos
let todoReducer = function(todos = [], action)
{
  switch (action.type)
  {
    case 'ADD_TODO':
      console.log("running ADD_TODO case");
      // create new object: '{}'
      // include all data from current state: 'state'
      // modify todos object
      return [{
          text: action.text,
          completed: false,
          id: getId(todos)
        }, ...todos]
    case 'COMPLETE_TODO':
      return map((todo) => {
        return todo.id === action.id ? // the correct todo
          // return a new object which is the same todo + the complete property
          // or ':' just the same todo
          Object.assign({}, todo, {completed: !todo.completed}) : todo
      })
    case 'DELETE_TODO':
      return todos.filter((todo) => {
          // return true for all except target todo
          return todo.id !== action.id
        })
    default:  // no change in state
      return todos;
  }
}

export default todoReducer;
