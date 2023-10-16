import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { useMovement } from '../hooks/useMovement';
import { useFrame } from '@react-three/fiber';

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

function Car() {
  const carRef = useRef();
  const { forward, backward, left, right } = useMovement();
  useFrame((state) => {
    if (!carRef.current) return;

    const velocity = carRef.current.linvel();

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED);

    carRef.current.wakeUp();
    carRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
  });
  return (
    <RigidBody position={[0, 1, -2]} ref={carRef} >
      <mesh>
        <capsuleGeometry arg={[0.5, 0.5]} />
      </mesh>
    </RigidBody>
  );
}
export default Car;
