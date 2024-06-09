import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './Info.jsx'
import About from './About.jsx'
import Interests from './Interests.jsx'
import Footer from './Footer.jsx'
import './index.css'
import './businessCard.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Info />
    <About />
    <Interests />
    <Footer />

  </React.StrictMode>,
)
