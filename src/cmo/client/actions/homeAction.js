

export const fetchHome = () => async (dispatch,getState,api) => {

  dispatch(fetchHomePending())
  const res = await api.get('https://demo.idg.com.au/ssr-example/cmo/home.json?v7');
 
  dispatch({
    type: "FETCH_HOME",
    payload: res
  })
  //dispatch(fetchRhs({data:res.data.rhs}))
};

export const fetchArticle = (match) => async (dispatch,getState,api) => {
  if(!match.params.id) return false
  

  const res = await api.get(`https://demo.idg.com.au/ssr-example/cmo/article/${match.params.id}.json?v2`);
 
  dispatch({
    type: "FETCH_MAIN_CONTENT",
    payload: res
  })
  //dispatch(fetchRhs({data:res.data.rhs}))
};
export const fetchHomePending = () => {
  return {
    type: 'FETCH_HOME/PENDING',
 
  }
}
export const clearMainContent = () => {
  return {
    type: 'CLEAR_MAIN_CONTENT',
 
  }
}
