import { injectGlobal } from 'styled-components';
// page reset need to be placed in this file
// theme style need to be GlobalStyle file
export default injectGlobal`
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
  body {
   
    margin: 0;
    padding: 0;
   .row:before,
   .row:after,
    .cf:before,
    .cf:after {
        content: " "; 
        display: table; 
    }
    .row:after,
    .cf:after {
        clear: both;
    }

    
    .cf,.row {
        *zoom: 1;
    }
  
  }

`