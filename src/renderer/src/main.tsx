// import './assets/main.css'
import './assets/vocapc.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
// import App from './App'
import Home from './page/Home'
import Training from './page/Training'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
