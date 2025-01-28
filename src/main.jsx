import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Port from './Port.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Port />
  </StrictMode>,
)
