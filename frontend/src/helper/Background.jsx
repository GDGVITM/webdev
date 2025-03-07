import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "#fbbb00", // Set the initial color to black
  });
  const data = useScroll();

  const tl = useRef();
  const planets = useRef([]);

  useFrame(() => {
    tl.current.progress(data.scroll.current);
    material.current.color = new THREE.Color(color.current.color);
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: "#fbbb00", // Keep the initial color black
    });
    tl.current.to(color.current, {
      color: "#f0fbbf", // Change the color to white
    });
    tl.current.to(color.current, {
      color: "#f0bbb0", // Change the color back to black
    });
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Update the rotation of each planet
    planets.current.forEach((planet, index) => {
      planet.rotation.y = time * (index + 1) * 0.1;
    });
  });

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
          color="#422C6C"
          // map={new THREE.TextureLoader().load(
          //   "../assets/Rock051_1K-JPG/Rock051_1K-JPG_Roughness.jpg"
          // )}
        />
      </Sphere>
      <Sphere scale={[5, 5, 5]} position={[10, 10, -50]}>
        <meshBasicMaterial color="#ffcc00" /> {/* Set the color of the sun to yellow */}
      </Sphere>
      <Sphere ref={(el) => (planets.current[0] = el)} scale={[10, 10, 10]} position={[20, -10, -100]}>
        <meshBasicMaterial color="#6A599D" />
      </Sphere>
      <Sphere ref={(el) => (planets.current[1] = el)} scale={[8, 8, 8]} position={[-30, 20, -80]}>
        <meshBasicMaterial color="#703764" /> 
      </Sphere>
      <Sphere ref={(el) => (planets.current[2] = el)} scale={[10, 10, 10]} position={[-20, -10, 100]}>
        <meshBasicMaterial color="#151140" />
      </Sphere>
      {/* ...add more planets similarly */}
      {/* Add particle blasting effect */}
      <group>
        {Array.from({ length: 100 }, (_, index) => (
          <Sphere
            key={index}
            scale={[Math.random(), Math.random(), Math.random()]}
            position={[
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * -100,
            ]}
          >
            <meshBasicMaterial color="#f0fbff" />
          </Sphere>
        ))}
        {Array.from({ length: 100 }, (_, index) => (
          <Sphere
            key={index}
            scale={[Math.random(), Math.random(), Math.random()]}
            position={[
              -Math.random() * 100 - 50,
              -Math.random() * 100 - 50,
              -Math.random() * -100,
            ]}
          >
            <meshBasicMaterial color="#f0ffdf" />
          </Sphere>
        ))}
      </group>
      <mesh>
        <sphereGeometry args={[1000, 32, 32]} />
        <meshBasicMaterial color="#2A4B7C" side={THREE.BackSide} />
      </mesh>
    </group>
  );
};
