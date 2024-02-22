import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export default function Cube({position, color}) {
    const ref = useRef()
    useFrame( (state, delta)=> {
        ref.current.rotation.y += delta*0.2 
    })
  return (
    <mesh position={position}  ref={ref} >
        <sphereGeometry  />
        <meshStandardMaterial color={color} wireframe={true} />
        
        
    </mesh>
  )
}
