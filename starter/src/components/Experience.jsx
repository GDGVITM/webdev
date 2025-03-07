import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Environment } from "@react-three/drei";
import { Model } from "./Character";

export const Experience = () => {
  const {color,floorColor,environment,background} = useControls({
    color:{
      value:"red",
      options:["red","blue","green","yellow","brown","orange"]
    },
    floorColor:{
      value:"blue",
      options:["red","blue","green","yellow","brown","orange"]
    },
    environment:{
      value:"sunset",
      options:[
        "apartment", "city", "dawn", "forest", "lobby", "night", "park", "studio", "sunset", "warehouse"
      ]
    },
    background:{
      value:"grey",
      options:["red","blue","green","yellow","brown","orange"]
    }
  })
  return (
    <>
      <OrbitControls />
      <Environment preset={environment}/>
      <color attach="background" args={[background]}  />
      <group>
        <Model/>
        {/* <mesh castShadow scale={[1,0.5,2]}>
          <boxGeometry />
          <meshPhysicalMaterial color={color}/>
        </mesh> */}
        <mesh position={[0,-0.25,0]} scale={[4,4,4]} rotation-x={-Math.PI/2}>
          <planeGeometry/>
          <meshStandardMaterial color={floorColor}/>
        </mesh>
      </group>
    </>
  );
};
