import React, { useState, useEffect } from 'react';

const AutoTypingCoustome = ({ texts, speed, delay }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeText = () => {
      const fullText = texts[currentTextIndex];
      const currentLength = currentText.length;

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentLength + 1));
      } else {
        setCurrentText(fullText.substring(0, currentLength - 1));
      }

      if (!isDeleting && currentLength === fullText.length) {
        setIsDeleting(true);
        setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((index) => (index + 1) % texts.length);
        }, delay);
      } else if (isDeleting && currentLength === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((index) => (index + 1) % texts.length);
      }
    };
    const typingInterval = setInterval(typeText, speed);
    return () => clearInterval(typingInterval);
  }, [currentText, currentTextIndex, isDeleting, delay, speed, texts]);

  return (
    <div>
      <span>{currentText}</span>
      <span className="cursor">|</span>
      {/* <span className="cursor">&#9612;</span> */}
    </div>
  );
};

export default AutoTypingCoustome;




// const yourComponent = () => {
//   const texts = ['Web Designer  ','Web Developer  ','Problem Solving Expert  '];

//   return (
//     <div>
//       <AutoTypingCoustome texts={texts} speed={100} delay={15000} />
//     </div>
//   );
// };
// export default yourComponent;
