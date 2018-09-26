import React, { PureComponent } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
const footerColor = theme('mode', {
  light: '#333',
  dark: '#278aef',
})
const Foot = styled.footer`
  a{
    color:#ccc;
    &:hover{
      color:#fff;
    }
  }
    margin: 30px 0 0;
    padding: 20px 0;
    background: ${footerColor};
    color: #888;
`
class Footer extends PureComponent {


  render() {
    return (
      <Foot>
        <div className="container">
          <div className="row cf">
            <div className="col-12">
              <a href="/about">About us</a> | <a href="/contacts">Contact us</a> | <a href="/privacy">Privacy Policy</a> | <a href="/rss/tax/news/">RSS</a>
              <br />
              Copyright 2018 IDG Communications. ABN 14 001 592 650. All rights reserved.
              <br />
              Reproduction in whole or in part in any form or medium without express written permission of IDG Communications is prohibited.
              <div id="footer_sites">
                      IDG Sites:
                <a href="http://www.cio.com.au" target="_blank">CIO</a> |
                <a href="http://www.pcworld.idg.com.au" target="_blank">PC World</a> |
                <a href="http://www.computerworld.com.au" target="_blank">Computerworld Australia</a> |
                <a href="http://www.cso.com.au" target="_blank">CSO Online</a> |
                <a href="http://www.techworld.com.au" target="_blank">Techworld</a> |
                <a href="http://www.arnnet.com.au" target="_blank">ARN</a> |
                <a href="http://www.goodgearguide.com.au" target="_blank">GoodGearGuide</a> |
                <a href="http://www.cioexecutivecouncil.com.au/" target="_blank">CIO Executive Council</a>
              </div>
            </div>
          </div>
        </div>
      </Foot>
    )

  }

}
export default Footer