import React, { Component } from 'react';

import { connect } from "react-redux";

import Popular from '../Section/Popular'
import FeaturedWhitepaper from '../Section/FeaturedWhitepaper'
import WebEvents from '../Section/WebEvents'
import Twitter from "../../../../sharedComponent/widget/Twitter"
import GoogleAd from '../../../../sharedComponent/widget/GoogleAd'
class RHS extends Component {
  
  shouldComponentUpdate(nextProps, nextState){
    return this.props.mainContent.InitialSSR === nextProps.mainContent.InitialSSR
  }
  render() {
    const { response } = this.props.mainContent
    return (
      <div className="col-4">
      <div className="rhs-box">
        <a href="# " className="radius hidden block">
          <img className="full-width " src='https://demo.idg.com.au/cmo/cmo50/2018/cmo50_promo2018_0813.jpg' />
        </a>
      </div>
      {response.rhs!==undefined &&  <Popular {...response.rhs.sections.popular} /> }
      {response.rhs!==undefined && <FeaturedWhitepaper {...response.rhs.sections.featuredWhitepaper} /> }
      {response.rhs!==undefined && <WebEvents {...response.rhs.sections.webEvents} />}
      <Twitter/>
      <GoogleAd adSlot={17} />
    </div>
    )
  }
 
}
function mapStateToProps(state) {
  return {
    mainContent: state.mainContent
  }
}
export default connect(mapStateToProps, {})(RHS);

