import { PointerLockControls, Sky, CameraControls, PerspectiveCamera } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import Ground from './components/Ground';
import Car from './components/Car';
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

function App() {
  const fbx = useLoader(FBXLoader, '/model.fbx')

  return (
    <>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={3} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <primitive object={fbx} position={[0, 0, 0]} />
      </Physics>
      <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
    </>
  );
}

export default App;
