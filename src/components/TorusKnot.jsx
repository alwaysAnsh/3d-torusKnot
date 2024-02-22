import { MeshWobbleMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export default function TorusKnot({position, color, size}) {
    const ref= useRef()
    // useFrame( (state, delta)=> {
    //     ref.current.rotation.x += delta*2
    //     ref.current.rotation.y += delta 
    //     ref.current.position.z = Math.sin(state.clock.elapsedTime)*2 
    // } )
  return (
    <mesh position={position} ref={ref} >
        <torusKnotGeometry args={size} />
        <meshStandardMaterial color={color} />
        <MeshWobbleMaterial factor={10} speed={0.2} />
    </mesh>
  )
}
