import React from 'react'
import TorusKnot from './TorusKnot'
import { OrbitControls, Sphere } from '@react-three/drei'

export default function Scene() {
  return (
    <>
        <directionalLight position={[0,0,5]} intensity={0.6} />
        
        {/* <Sphere position={[0,0,0]} color={"hotpink"} /> */}
        <TorusKnot position={[0,0,0]} color={"orange"} size={[6,0.1,1000,50]}/>
        <OrbitControls enableZoom={false} />
    </>
  )
}
