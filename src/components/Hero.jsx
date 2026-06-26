import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero"id="Hero">

      <motion.h1
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        Crack Placements Faster 🚀
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 1,
        }}
      >
        Prepare for TCS, Infosys, Wipro,
        Cognizant and Capgemini from
        one platform.
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
      >
        <marquee>
          The Placement Hub is Creating Future AI Engineers 🚀 |
          Master the skills that matter |
          Crack Placements Faster |
          Learn • Practice • Get Hired
        </marquee>
      </motion.div>

      <motion.div
        className="hero-buttons"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
      >
        <button>Get Started</button>

        <button>View Features</button>
      </motion.div>

    </section>
  );
}

export default Hero;