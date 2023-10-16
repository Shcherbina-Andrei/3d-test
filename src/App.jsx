import { PointerLockControls, Sky } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import Ground from './components/Ground';
import Car from './components/Car';
import { CarModel } from './models/CarModel';

function App() {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={3} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Car />
        <RigidBody>
          <mesh position={[0, 3, -5]}>
             <boxGeometry />
          </mesh>
        </RigidBody>
      </Physics>
      <group position={[0, 3, 0]}>
        <CarModel />
      </group>
    </>
  );
}

export default App;
