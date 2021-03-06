import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import mainContentReducer from './mainContentReducer';
import rhsReducer from './rhsReducer';
export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
  mainContent: mainContentReducer,
  rhs: rhsReducer,
});
