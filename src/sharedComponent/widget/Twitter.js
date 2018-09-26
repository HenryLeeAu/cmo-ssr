import React, { PureComponent } from 'react'
import {Helmet} from "react-helmet";

class Twitter extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const promose = new Promise((resolve,reject)=>{
      const interval  = setInterval(()=>{
        if(window.twttr){
          resolve();
          clearInterval(interval)
        }
      },0.03)
    })
    promose.then(()=> window.twttr.widgets.load(this.twitterElement))
  }
  componentWillUnmount(){
  }
  render() {
    console.log('call twitter');
   
    return (
      <div    >
      <Helmet>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Helmet>
      <a className="twitter-timeline"  ref={ widget => (this.twitterElement = widget)} data-height="640" href="https://twitter.com/CMOAustralia?ref_src=twsrc%5Etfw">Tweets by CMOAustralia</a>
      </div>

    )
  }

}

export default Twitter;
