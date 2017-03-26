// No longer getting the entire state, just todos
// needs a default value ----v
let userReducer = function(user = {}, action)
{
  switch (action.type)
  {
    case 'CREATE_USER_ID':
      return {
          username: user.username,
          id: action.id
      }
    default:  // no change in state
      return user;
  }
}

export default userReducer;
