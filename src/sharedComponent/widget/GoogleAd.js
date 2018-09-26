import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
class GoogleAd extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if(this.props.adSlot){
      console.log(`fetch No.${this.props.adSlot} Ad for ${ this.props.match.url}`)
    } 
  
  }
  componentWillUnmount(){
    
  }
  render() {
   
    return (
      <div>
       Ad No.{this.props.adSlot}
      </div>

    )
  }

}

export default withRouter(GoogleAd);
