import React  from 'react'
import styled,{css} from 'styled-components';
//--section style---
//headerUpperCase  
//headerSizeLg 
//sectionBorder
//sectionBgGrey

const Header = styled.h2`
  border-bottom: 1px solid #c22b70;
  color:#c22b70;
  text-transform: ${  ({ headerUpperCase }) => headerUpperCase ?  'uppercase' :'lowercase' };
  font-size:${  ({ headerSizeLg }) => headerSizeLg ?  '28px' :'12px' };
  letter-spacing: 0;
  font-weight:700;
  margin:  0 0 20px 0;
  text-align: left;
  padding: 0 0 5px;
`
const Warp = styled.div`
  border: ${  ({ sectionBorder }) => sectionBorder ?  '1px solid #ddd' :false };
  padding: ${  ({ sectionBorder }) => sectionBorder ?  '15px' :false};
  border-radius: ${  ({ sectionBorder }) => sectionBorder ?  '5px' :false };
  box-shadow: ${  ({ sectionBorder }) => sectionBorder ?  '0 2px 0 rgba(0,0,0,.1)' :false };
  background-color:${  ({ sectionBgGrey }) => sectionBgGrey ?  'rgb(250, 251, 251);' :false };
  margin-bottom:20px;
  ul{
    list-style: none;
    margin-bottom:15px;
    li{
      margin-bottom:15px;
     
      a{
        color: #000;
        font-size:13px
      }
      h3{
        font-weight:700;
        margin:0;
        line-height:1.3;
        a{
        font-size:17px;
        }
        &.small{
          a{
            font-size:13px;
            font-weight:normal;
          }
        }
        span{
          &.tag{
            font-weight: 700;
             color: #000 ;
             &::after{
              content: ' | ';
              font-weight: 100;
              color: #555;
             }
          }

        }
      }
      p{
        margin:5px 0;
        color:#777;
        font-size:13px;
        line-height: 1.3;
      }
      .author{
        color: #ccc;
        font-weight:bold;
      }
    }
    &.disc{
      list-style-type: disc;
      color: #c22b70;
      padding-left:25px;
      li{
        margin-bottom:8px;
      }
    }
  
  }

`
export default ({ header,headerUpperCase = false , headerSizeLg = false, sectionBorder = false , sectionBgGrey= false ,children })=>{
  return (
    <Warp {...{sectionBorder, sectionBgGrey}}>
    { 
      header && 
      <Header {...{ headerUpperCase, headerSizeLg}} > 
        { header }
      </Header>
    }
    { children }
    </Warp>
  )
}

