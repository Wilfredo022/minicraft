import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cubes } from "./components/Cubes";
import { FPV } from "./components/FPV";
import { Ground } from "./components/Ground";
import { Help } from "./components/Help";
import { Menu } from "./components/Menu";
import { Player } from "./components/Player";
import { TextureSelector } from "./components/TextureSelector";
import { useStore } from "./hooks/useStore";

function App() {
  const [help] = useStore((state) => [state.help]);
  return (
    <>
      <Canvas>
        <Sky
          distance={450000}
          sunPosition={[5, 1, 8]}
          inclination={0}
          azimuth={0.45}
        />
        <ambientLight intensity={0.3} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
      {help ? <Help /> : null}
    </>
  );
}

export default App;
