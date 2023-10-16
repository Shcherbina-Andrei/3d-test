import { PointerLockControls, Sky } from '@react-three/drei';
import Ground from './components/Ground';

function App() {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={3} />
      <Ground />
    </>
  );
}

export default App;
