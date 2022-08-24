import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components'
import Colors from './assets/Colors'

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
} 

body{
    background-color:${Colors.BACKGROUND}
  }

*{
  padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Poppins', sans-serif;
   scrollbar-width: 0;
   ::-webkit-scrollbar{
     display: none;
   }
}

a{
  text-decoration: none;
}

a:visisted{
  color: #070710;
}

li{
  list-style:none;
}

::-webkit-scrollbar {
  width: 10px;
  display:block;
}

::-webkit-scrollbar-track {
   background: ${Colors.BACKGROUND};
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
background: ${Colors.Primary};
}

`;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
