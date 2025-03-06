import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { useEffect, useState , Suspense} from "react";
import {LoadingScreen} from "./helper/LoadingScreen";
import Navigation from "./components/Navigation";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./utils/config";
import {ScrollManager} from "./helper/ScrollManager";
import { Interface } from "./helper/Interface";
import { Leva } from "leva";

function App() {
    const [section, setSection] = useState(0);
    const [started, setStarted] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    const [descriptionOpened, setDescriptionOpened] = useState(false);

    useEffect(() => {
      setMenuOpened(false);
    }, [section]);
  return (
          <>
          <LoadingScreen started={started} setStarted={setStarted} />
          {
        started && (
          <Navigation setMenuOpened={setMenuOpened} setSection={setSection} menuOpened={menuOpened} setDescriptionOpened={setDescriptionOpened} descriptionOpened={descriptionOpened} />
        )
      }
      {
        started && (
          <color attach="background" args={["#feabces"]}  />
        )
      }
      <MotionConfig
        transition={{
          ...framerMotionConfig
        }}></MotionConfig>
          <Canvas shadows camera={{ position: [3, 3, 3], fov: 60 }}>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection}/>
          <Scroll>
            <Suspense>
                {started && (
                  <Experience />
                )}
              </Suspense>
          </Scroll>
          <Scroll html>
          <Scroll html>
              {started && <Interface setSection={setSection}/>}
            </Scroll>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Leva hidden/>
          </>
  );
}

export default App;
