import React, { useEffect, useState } from 'react';

function TypingText() {
  const text = "Seja bem-vindo! Prepare-se para mergulhar nas tecnologias mais empolgantes e relevantes da nossa era.";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); 

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, text]);

  return (
    <div className='text'>
      <p>{displayText}</p>
      <p>criado e desenvolvido por:<a href='https://odevpablo.netlify.app/' target="_blank">@odevpablo</a> </p>
    </div>
  );
}

export default TypingText;
