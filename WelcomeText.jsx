import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function WelcomeText() {
  const [isVisible, setIsVisible] = useState(false);
  const [scattered, setScattered] = useState(false);
  const textRef = useRef(null);
  const letters = "JOHANNES".split("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setScattered(false);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    console.log("Nuolta klikattu");
    setScattered(true);
    setTimeout(() => {
      const nextSection = document.querySelector("#experience-section");
      console.log("Seuraava osio:", nextSection);
      if (nextSection) {
        document.body.style.scrollSnapType = "none"; // Poista snap
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: nextSection, offsetY: 50 },
          ease: "power2.out",
          onComplete: () => {
            document.body.style.scrollSnapType = "y mandatory"; // Palauta snap
            console.log("GSAP-animaatio valmis");
          },
        });
        console.log("GSAP scrollTo käynnistetty");
      }
    }, 900);
  };

  return (
    <div ref={textRef} className="welcome-text-box">
      <motion.div className="keyboard">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="key"
            initial={{ opacity: 0.4, scale: 0.8 }}
            animate={
              scattered
                ? {
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    rotate: Math.random() * 720 - 360,
                    opacity: 0,
                    scale: 1.5,
                  }
                : isVisible
                ? {
                    opacity: [1, 0.4, 1],
                    scale: [1, 1.1, 1],
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <div className="arrow-container">
      <p className="click-me">Click here</p>
        <motion.button
          className="scroll-button"
          onClick={handleClick}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          ⬇
        </motion.button>
      </div>
    </div>
  );
}

export default WelcomeText;














