import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  return (
          <>
          <Contact/>
          <Project/>
          </>
  );
}

export default App;
