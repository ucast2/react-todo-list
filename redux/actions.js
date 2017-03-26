let actions =
{
  // this is an action creator
  addTodo: function(text)
  {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  completeTodo: function(id)
  {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id)
  {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function()
  {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function()
  {
    return (dispatch, getState) =>
    {
      const { user } = getState(); // brackets allow us to pull out user prop of State

      if (user.id % 2 === 0) { return } // if even, don't create

      dispatch(actions.createNewUserId()); //  comment
    }
  },

  createNewUserIdAsync: function()
  {
    return (dispatch) =>
    {
      // setTimeout takes 2 args: function to run, and delay after which to run said function
      // mimicks server call / get() request
      setTimeout(() => {
        dispatch(actions.createNewUserId()); //  comment
      }, 2500)

    }
  }
}

export default actions;

// create action and pass to dispatch()
// store.dispatch(addTodo('some text'));



// WEBPACK FOOTER //
// ./redux/actions.js
