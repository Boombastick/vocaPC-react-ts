// import './assets/main.css'
import './assets/vocapc.css'

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
// import App from './App'
import Home from './page/Home'
import Training from './page/Training'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
