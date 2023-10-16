import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import grassTexture from '../assets/grass-3.jpg';

function Ground() {
  const texture = useTexture(grassTexture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <RigidBody>
      <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2 }>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="green" map={texture} map-repeat={[100, 100]} />
      </mesh>
    </RigidBody>
  );
}
export default Ground;
