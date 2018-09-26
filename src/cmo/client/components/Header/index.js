import React, { PureComponent } from "react"

import { connect } from 'react-redux';
import logo from '../../../media/images/cmo_logo_idg.png';
import Navbar from './Navbar'
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import GoogleAd from '../../../../sharedComponent/widget/GoogleAd'
const HeaderCon = styled.header`
  padding-top:50px;
  padding-bottom:20px;
`
class Header extends PureComponent {
  render(){

    return (
      <nav>
        <Navbar />
        <HeaderCon className="container">
        <div className="row">
          <div className="col-3">
          <Link to="/" className="brand-logo center"><img src={logo} /></Link>
          </div>
          <div className="col-9">
          
          <GoogleAd adSlot={3} />
          </div>
          </div>
        </HeaderCon>
      </nav>
    )
  }
}
/*
const Header = ({ auth,match }) => {
 

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
      <a href="/api/auth/google">Login</a>
    );

  return (
   
    <nav>
      <Navbar />
      <HeaderCon className="container">
      <div className="row">
        <div className="col-3">
        <Link to="/" className="brand-logo center"><img src={logo} /></Link>
        </div>
        <div className="col-9">
        <GoogleAd adSlot={3} />
        </div>
        </div>
      </HeaderCon>
    
    </nav>
  )

}*/
/**
   <Link to="/" className="brand-logo center">React SSR</Link>
      <ul className="right">
       
        <li> <Link to="/users">Users</Link></li>
        <li> <Link to="/myadin">Admins</Link></li>
        <li> {authButton}</li>
      </ul> 
 
 */
function mapStateToProps({ auth,mainContent }) {
  return { auth,mainContent }
}

export default connect(mapStateToProps)((Header));