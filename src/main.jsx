import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './style.css'
import RelatoPapelApp from './RelatoPapelApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RelatoPapelApp />
    </BrowserRouter>
  </StrictMode>
)
