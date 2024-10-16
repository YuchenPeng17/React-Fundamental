// Import React Core Library
import React from 'react'
// Import ReactDOM
import ReactDOM from 'react-dom'
// Import App component
import App from './App'

// 渲染 App 组件到 index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);