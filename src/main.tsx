import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LazyMotion, domAnimation } from "framer-motion"
import { AppProvider } from './context/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <LazyMotion features={domAnimation}>
        <App/>
      </LazyMotion>
    </AppProvider>
  </React.StrictMode>,
)
