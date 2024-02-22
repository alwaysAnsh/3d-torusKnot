import { useState } from 'react'
import './App.css'
import {Canvas} from '@react-three/fiber'

import Scene from './components/Scene'
function App() {
  

  return (
    <Canvas>
      <Scene/>
    </Canvas>
  )
}

export default App
