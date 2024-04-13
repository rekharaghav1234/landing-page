// 'use client'
// import React, { useRef, useEffect } from 'react';
// import styles from './Slider.module.css'; // Import CSS module for styling

// const Slider = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     let animationFrame;

//     const scroll = () => {
//       if (slider) {
//         slider.scrollTo(0, slider.scrollTop + 1);
//         if (slider.scrollTop % 100 === 0) {
//           clearInterval(animationFrame);
//           animationFrame = setTimeout(scroll, 3000); // Adjust scroll speed as needed
//         } else {
//           animationFrame = requestAnimationFrame(scroll);
//         }
//       }
//     };

//     animationFrame = setTimeout(scroll, 3000); // Adjust initial delay as needed

//     return () => {
//       clearTimeout(animationFrame);
//     };
//   }, []);

//   return (
//     <div className={styles.sliderContainer} ref={sliderRef}>
//       <div className={styles.sliderContent}>
//         <p>I recently used an AI chat system and <br/>it exceeded my expectations. The speed and<br/> accuracy of the responses were impressive,<br/> and the personalized recommendations were a<br/> nice touch. I highly recommend it to anyone looking<br/> to streamline their communication process</p>
//       </div>
//       <div className={styles.newParagraph}>
//         <p>This is a new paragraph that emerges from the bottom.</p>
//       </div>
//     </div>
//   );
// };

// export default Slider;
