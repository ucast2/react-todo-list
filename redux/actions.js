export default actions =
{
  // this is an action creator
  addTodo(text)
  {
    return {
      type: 'ADD_TODO',
      text: text
    }
  }
}

// create action and pass to dispatch()
store.dispatch(addTodo('some text'));
