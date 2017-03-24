let actions =
{
  // this is an action creator
  addTodo: function(text)
  {
    return {
      type: 'ADD_TODO',
      text: text
    }
  }
}

export default actions;

// create action and pass to dispatch()
// store.dispatch(addTodo('some text'));
