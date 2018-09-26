import React, { PureComponent } from 'react';
import Header from "../Header"
import Footer from "../Footer"
import { withRouter } from 'react-router-dom';
import SiteWrapper from './index'


export default (MainContent) => {
  class SiteWrapperWithoutRHS extends PureComponent {
    render(){
      return(
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <MainContent { ...this.props} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  }
 


  return SiteWrapper(withRouter(SiteWrapperWithoutRHS))
}
