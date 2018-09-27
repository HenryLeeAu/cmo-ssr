import styled from 'styled-components';
import theme from 'styled-theming';
const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const themeColor = theme('mode', {
  light: '#0074b0',
  dark: '#666',
});
const themeColorHover = theme('mode', {
  light: '#268faf',
  dark: '#000',
});
const themeLabel = theme('mode', {
  light: '#c22b70',
  dark: 'green',
});
const GlobalStyle = styled.div`
    font-size:14px;
    line-height: 1.5;
    font-family: 'open sans','Arial','sans-serif';
    ul{
      margin:0;
      padding:0;
    }
   
    .inline-block{
      display:inline-block;
    }
    a{
      color:${themeColor};
      text-decoration:none;
      &:hover{
      color:${themeColorHover};
      }
    }
    .label{
    color:${themeLabel};
    }
    .bold{
      font-weight:700;
    }
    .container{
      max-width:1080px;
      margin:0 auto;
    }
    .float-left{
      float:left;
    }
    .img-shadow{
      box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    }
    .hidden{
      overflow:hidden;
    }
    .rhs-box{
      padding-bottom:15px;
    }
    .radius{
      border-radius:5px;
    }
    .full-width{
      width:100%;
    }
    .btn-more{
      color: #aaa;
      background: #f3f3f3;
      display: block;
      padding: 5px 0;
      border-radius: 20px;
      width: 100%;
      margin: 0 auto;
      text-align:center;
      font-size:12px;
      font-weight:700;
      &:hover{
        color: #fff;
        background: #258faf;
      }
    }
    .row{
   

    }
    .col-3{
      width:25%;
      padding: 0 15px;
      float:left;
    }
    .col-4{
      width:33.33%;
      padding:0 15px;
      float:left;
    }
    .col-5{
      width:41.66%;
      padding:0 15px;
      float:left;
    }
    .col-6{
      width:50%;
      padding:0 15px;
      float:left;
    }
    .col-7{
      width:58.33%;
      padding:0 15px;
      float:left;
    }
    .col-8{
      width:66.66%;
      padding:0 15px;
      float:left;
    }

    .col-9{
      width:75%;
      padding:0 15px;
      float:left;
    }
    .col-12{
      width:100%;
      padding: 0 15px;
      float:left;
    }
    .block{
      display:block;
    }
    .inline-block{
      display:inline-block;
      &.col-6{
        padding:0 5px;
        float:float: none;
      }
    }
  background-color: ${boxBackgroundColor};
`;
export default GlobalStyle;
