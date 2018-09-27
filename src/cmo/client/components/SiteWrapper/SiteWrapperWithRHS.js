import React, { PureComponent } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import RHS from '../RHS';
import SiteWrapper from './index';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const LHR = styled.div`
  min-height: 10px;
`;
export default MainContent => {
  class SiteWrapperWithRHS extends PureComponent {
    render() {
      return (
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-8">
                <LHR>
                  <MainContent {...this.props} />
                </LHR>
              </div>
              <RHS />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }

  return SiteWrapper(withRouter(SiteWrapperWithRHS));
};
