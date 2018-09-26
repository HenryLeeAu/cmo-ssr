import React, { Component } from "react"
import Article from '../../../sharedComponent/Article'
import SiteWrapperWithRHS from '../components/SiteWrapper/SiteWrapperWithRHS'
import { connect } from "react-redux";
import { fetchArticle,clearData } from '../actions';
import SiteTitlePrefix from "../../configuration/SiteTitlePrefix"

class ArticlePage extends Component {
  componentDidMount() {
    if(this.props.mainContent.InitialSSR) this.props.fetchArticle(this.props.match)
  }
  componentWillUnmount(){
    this.props.clearData()
  }
  shouldComponentUpdate(nextProps, nextState){
    return this.props.mainContent.InitialSSR === nextProps.mainContent.InitialSSR
  }
  render() {
  
    console.log('article')
    return (
      <Article {...this.props.mainContent.response.main}  SiteTitlePrefix= {SiteTitlePrefix}/>
    )

  }

}
function mapStateToProps({mainContent}) {
  return {
    mainContent
  }
}
function loadData(store,match) {
  return store.dispatch(fetchArticle(match))
}
/*
export default {
  loadData, 
  component: SiteWrapperWithRHS(connect(mapStateToProps, { fetchArticle,clearData })(ArticlePage))

};*/
export default SiteWrapperWithRHS(connect(mapStateToProps, { fetchArticle,clearData })(ArticlePage))



