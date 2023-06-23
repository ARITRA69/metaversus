'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components'
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="━━━ Reachout to Others ━━━" textStyles='text-center'/>
      <TitleText title={<>Tracking Friends and Inviting them to Embark on a Shared Virtual Journey</>} textStyles='text-center'/>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[150px] h-[150px] p-[6px] rounded-full">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[150px] h-[150px] p-[6px] rounded-full">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[80px] left-[65%] w-[150px] h-[150px] p-[6px] rounded-full">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[60%] left-[15%] w-[250px] h-[200px] p-[6px] rounded-full">
          <img src="Group-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-20 left-[45%] w-[250px] h-[200px] p-[6px] rounded-full">
          <img src="Group-02.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
    
);

export default World;
