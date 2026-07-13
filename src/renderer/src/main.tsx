// import './assets/main.css'
import './assets/vocapc.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import Home from './page/Home'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
