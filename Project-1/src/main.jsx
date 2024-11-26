import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Ali  from  './Ali'
import Nav from './nav'
import Hero from './hero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Hero/>
    {/* <Ali/> */}
  </StrictMode>,
)
