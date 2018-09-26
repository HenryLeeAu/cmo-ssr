
import { clearMainContent } from "./homeAction"
export * from './rhsAction';
export * from './homeAction';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch,getState,api) => {
  //const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  })

};
/*export const clearData = () => async (dispatch,getState,api) => {
  //const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
 // const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  })

};*/


export const clearData = () =>{
  return dispatch => {
   
    dispatch(clearMainContent())
  };
}


export const initialSSR = () => {
  return {
    type: 'INITIALSSR',
 
  }
}

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () =>async (dispatch,getState,api) =>{
  const res = await api.get('/current_user');

  dispatch({
    type:FETCH_CURRENT_USER,
    payload:res
  })

}


export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch,getState,api) =>{
  const res = await api.get('/admins')
  dispatch({
    type:FETCH_ADMINS,
    payload:res
  })

}