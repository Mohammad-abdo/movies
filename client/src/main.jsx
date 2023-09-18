import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "react-bootstrap"
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
