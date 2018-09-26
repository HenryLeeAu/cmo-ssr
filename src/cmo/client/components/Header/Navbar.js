import React from 'react';

import styled from 'styled-components';
import theme from 'styled-theming';
const headerColor = theme('mode', {
  light: '#fff',
  dark: 'yellow',
})
const Topnav = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 34px;
  border-bottom: 1px solid #ddd;
  font-size: .85em;
  background: ${headerColor};
  color: #888;
  line-height: 34px;
    margin: 0;
    float: left;
  li{
    list-style: none;
    display: inline-block;
    margin-left: 15px;
  }
`
export default () => {
  return (

    <Topnav>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="inline-block label bold">Insights:</span>
            <ul className="inline-block ">
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Customer Experience</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Magazine</a></li>
              <li><a href="#">Chief Digital Officer</a></li>
              <li><a href="#">Subscribe</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Topnav>

  )
}