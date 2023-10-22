import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="container">
      <div className="point"></div>
      <Canvas flat shadows>
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
        <App />
      </Canvas>
    </div>
  </React.StrictMode>,
)
