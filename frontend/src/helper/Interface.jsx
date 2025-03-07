import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useRef , useState , useEffect} from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import debounce from "lodash.debounce";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  const prevRef = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (event) => {
    console.log(event)
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = debounce((event) => {
    const touchEndY = event.touches[0].clientY;
    const touchDiff = touchStartY.current - touchEndY;

    if (touchDiff >= 30) {
      // Swiping up
      prevRef.current = Math.min(prevRef.current + 1, 3);
    } else if (touchDiff <= -30) {
      // Swiping down
      prevRef.current = Math.max(prevRef.current - 1, 0);
    }
    setSection(prevRef.current);
  }, 100);

  const handleScroll = debounce((event) => {
    if (event.deltaY >= 30) {
      // Scrolling down
      prevRef.current = Math.min(prevRef.current + 1, 3);
    } else if (event.deltaY <= -30) {
      // Scrolling up
      prevRef.current = Math.max(prevRef.current - 1, 0);
    }
    setSection(prevRef.current);
  }, 100);

  return (
    <div
      className="flex flex-col items-center w-screen"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onWheel={handleScroll}
    >
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <Project />
      <Contact/>
    </div>
  );
};
const AboutSection = (props) => {
  const { setSection } = props;
  const anim = useRef();
  const hire = useRef();
  useGSAP(()=>{
    gsap.to(anim.current,{
      x:20,
      duration:0.4,
      yoyo:true,
      repeat:-1,
      delay:0.2
    })
    gsap.to(hire.current,{
      y:10,
      duration:0.4,
      yoyo:true,
      repeat:-1,
      delay:0.2
    })
  })
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <div ref={anim} className="bg-transparent px-1 italic">Your Name</div>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >Discription
        <br />
        About yourself
      </motion.p>
      <motion.button
        ref={hire}
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Hire
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "enter skill one",
    level: 90,
  },
  {
    title: "skill 2",
    level: 70,
  },
  {
    title: "skill 3",
    level: 90,
  },
  {
    title: "skill 4",
    level: 50,
  },
  {
    title: "skill 5",
    level: 40,
  },
  {
    title: "skill 6",
    level: 80,
  },
  {
    title: "others",
    level: 40,
  },
];

const SkillsSection = () => {
  const svgRef = useRef()
  const [centerWidth, setCenterWidth] = useState(window.innerWidth / 2);
  const pathd = `M 0 40 Q 100 40 200 40`
  const mouseMove = (dets,ref)=>{
    let path = `M 0 40 Q 100 ${dets.clientX} 200 40`;

      gsap.to(svgRef.current,{
        attr:{d:path},
        ease:"power3.out"
      })
  }
  const mouseExit = (dets,ref)=>{
    let path = `M 0 40 Q 100 ${dets.clientX} 200 40`;

      gsap.to(svgRef.current,{
        attr:{d:pathd},
        duration:0.8,
        ease:"elastic.out(1,0.2)"
      })
  }
  
  useEffect(() => {
    const handleResize = () => {
      setCenterWidth(window.innerWidth / 2);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div 
          className="flex w-full"  
          onMouseLeave={(dets)=>mouseExit(dets,svgRef)} 
          onMouseMove={(dets)=>mouseMove(dets,svgRef)}
          onTouchEnd={(e)=>mouseMove(e.changedTouches[0],svgRef)}
          onTouchMove={(e)=>mouseMove(e.touches[0],svgRef)}
          >
        <svg  className="w-full" height={80} preserveAspectRatio="none">
          <path ref={svgRef} d={pathd} stroke="black" fill="transparent" />
        </svg>
        </div>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};