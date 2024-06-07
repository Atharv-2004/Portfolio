import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import videoSrc from '../../Pictures/Gen-2 8s, 1751689586, M 5.mp4';

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

function About() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [refLeft, inViewLeft] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refRight, inViewRight] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start('visible');
    }
  }, [controlsLeft, inViewLeft]);

  useEffect(() => {
    if (inViewRight) {
      controlsRight.start('visible');
    }
  }, [controlsRight, inViewRight]);

  return (
    <div className="about-container flex flex-col md:flex-row items-center justify-between min-h-screen px-5">
      <motion.div
        className="textbox bg-white bg-opacity-60 p-5 rounded-md shadow-lg w-full md:w-3/5 mb-10 md:mb-0 md:mr-10"
        ref={refLeft}
        initial="hidden"
        animate={controlsLeft}
        variants={slideInLeft}
      >
        <div className="heading text-3xl font-bold mb-4 text-black">
          What makes "me"...
        </div>
        <div className="content text-black">
          <p>
            A native of Madhya Pradesh who has thrived in diverse cultures of more than 7 states. This helped me to learn and adapt to different cultures, languages, and people. I am a passionate learner and a tech enthusiast who loves to explore new technologies and frameworks. I am a district level speaker; debatist; essay writer, and a state level elocutionist. I love playing sports that helped become a better leader and a better team player. I have played district level cricket and some e-sports tournaments too. I love writing, and listening to music. In short, "just a coding enthusiast trying to balance between creativity and productivity!"
          </p>
        </div>
      </motion.div>
      <motion.div
        className="video-container w-full md:w-2/5"
        ref={refRight}
        initial="hidden"
        animate={controlsRight}
        variants={slideInRight}
      >
        <video src={videoSrc} autoPlay loop muted className="rounded-md shadow-lg w-full" />
      </motion.div>
    </div>
  );
}

export default About;
