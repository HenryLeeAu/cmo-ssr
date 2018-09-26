import React from 'react';

import '../configuration/bodyStyle';
import App from './App';
//import HomePage from './pages/HomePage'

import NotFoundPage from './pages/NotFoundPage'
//import ArticlePage from "./pages/ArticlePage"
//import UsersListPage from './pages/UsersListPage'
//import AdminsListPage from './pages/AdminsListPage'

import Loadable from 'react-loadable';
import { fetchArticle } from '../client/actions';
import { fetchHome } from '../client/actions';
const loadingCom = () =>{
  return <div>Loading</div>
}

const ArticlePage = Loadable({
  loader: () => import('./pages/ArticlePage'),
  modules: ['./pages/ArticlePage'],
  webpack: () => [require.resolveWeak('./pages/ArticlePage')],
  loading:loadingCom
});
const HomePage = Loadable({
  loader: () => import('./pages/HomePage'),
  modules: ['./pages/HomePage'],
  webpack: () => [require.resolveWeak('./pages/HomePage')],
  loading:loadingCom
});


export default [
  {
    ...App,
    routes:[
      {
        path:'/',
        loadData:(store,match) =>store.dispatch(fetchHome(match)),
        component:HomePage,
        exact:true
      },
      { 
        path:'/article/:id',
        loadData:(store,match) => store.dispatch(fetchArticle(match)),
        component:ArticlePage,
      },
      /*{ 
        ...AdminsListPage,
        path:'/myadin'
        
      },*/
     /* { 
        ...UsersListPage,
        path:'/users'
        
      },*/
      //for 404
      {
        component:NotFoundPage
       
      }
    ]
  }

]



/*() =>{
  return(
    <div>
      <Route exact path="/" component = { Home } />
      <Route  path="/users" component = { UsersList } />
    </div>
  )
}*/