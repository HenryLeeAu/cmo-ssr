import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchUsers} from '../actions';
import { Helmet } from 'react-helmet'

class UsersListPage extends Component {
  componentDidMount(){
    this.props.fetchUsers()
  }
  renderUsers(){
    return this.props.users.map(user =>{
      return <li key={user.id}>{user.name}</li>
    })
  }
  head(){
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users loaded` } </title>
        <meta property="og:title" content="User App" />
      </Helmet>
    )
  }
  render(){
    return (
      <div>
       { this.head() }
        list of users
        <ul>
          {this.renderUsers()}
          </ul>
      </div>
      
    )
  }
}

function mapStateToProps({mainContent}){
  return {
    mainContent
  }
}

function loadData(store){
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component:connect(mapStateToProps, { fetchUsers })(UsersListPage)
}