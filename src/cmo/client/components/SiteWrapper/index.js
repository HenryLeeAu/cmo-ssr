import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialSSR } from '../../actions';
export default TemplateComponent => {
  class SiteWrapper extends Component {
    componentDidMount() {
      if (!this.props.mainContent.InitialSSR) this.props.initialSSR();
    }
    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
    render() {
      console.log('main');

      return <TemplateComponent />;
    }
  }

  function mapStateToProps({ mainContent }) {
    return {
      mainContent,
    };
  }
  return connect(
    mapStateToProps,
    { initialSSR }
  )(SiteWrapper);
};
