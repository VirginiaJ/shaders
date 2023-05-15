import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import testFragmentShader from "src/shaders/test/fragmentShader.glsl"
import testVertexShader from "src/shaders/test/vertexShader.glsl"

export const MyCanvas = () => (
  <Canvas
    id="canvas"
    style={{ background: "#000" }}
    camera={{
      position: [0, 0, 10],
      near: 0.01,
      far: 100,
      fov: 45,
    }}
  >
    <mesh>
      <planeGeometry args={[1, 1]} />
      <rawShaderMaterial
        vertexShader={testVertexShader}
        fragmentShader={testFragmentShader}
      />
    </mesh>
    <ambientLight intensity={2} />
    <OrbitControls />
  </Canvas>
)
