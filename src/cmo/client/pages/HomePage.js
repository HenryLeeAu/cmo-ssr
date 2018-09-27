import React, { Component } from 'react';
import LatestArticles from '../components/Section/LatestArticles';
import Blogs from '../components/Section/Blogs';
import LatestMultimedia from '../components/Section/LatestMultimedia';
import Trendsetting from '../components/Section/Trendsetting';
import SiteWrapperWithRHS from '../components/SiteWrapper/SiteWrapperWithRHS';
import { connect } from 'react-redux';
import { fetchHome, clearData } from '../actions';
import { Helmet } from 'react-helmet';
import SiteTitlePrefix from '../../configuration/SiteTitlePrefix';

class HomePage extends Component {
  componentDidMount() {
    if (this.props.mainContent.InitialSSR) this.props.fetchHome();
  }
  componentWillUnmount() {
    this.props.clearData();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.mainContent.InitialSSR === nextProps.mainContent.InitialSSR
    );
  }
  show() {
    console.log('home');
    const { response } = this.props.mainContent;
    // const { latestArticles, blogs, latestMultimedia, trendSettings } = this.props.mainContent.response.main;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{SiteTitlePrefix(`Home`)}</title>
        </Helmet>
        <div className="row">
          <div className="col-6">
            {response.main !== undefined && (
              <LatestArticles {...response.main.latestArticles} />
            )}
            {response.main !== undefined && <Blogs {...response.main.blogs} />}
            {response.main !== undefined && (
              <LatestMultimedia {...response.main.latestMultimedia} />
            )}
          </div>
          <div className="col-6">
            {response.main !== undefined && (
              <Trendsetting {...response.main.trendSettings} />
            )}
          </div>
        </div>
      </div>
    );
  }
  render() {
    // console.log('scscs')
    // console.log(this.props.mainContent.response)
    if (this.props.mainContent.response !== undefined) {
      return this.show();
    }
  }
}
function mapStateToProps({ mainContent }) {
  return {
    mainContent,
  };
}
/*
export default {
  loadData,
  component: SiteWrapperWithRHS(connect(mapStateToProps, { fetchHome, clearData })(HomePage))

};
*/
export default SiteWrapperWithRHS(
  connect(
    mapStateToProps,
    { fetchHome, clearData }
  )(HomePage)
);
