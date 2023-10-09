import React, { useState } from 'react';
import { FcInfo } from "react-icons/fc";
import TypingText from './TypingText';

function IconWithDiv() {
  const [divVisible, setDivVisible] = useState(false);

  const toggleDiv = () => {
    setDivVisible(!divVisible);
  };

  return (
    <div>
      <button className='btinfo'
       style={{
        border: 'none',
        background: 'none',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
      }}
      onClick={toggleDiv}><FcInfo size={35}/></button>
      {divVisible && <div className="info-screen">
        <TypingText/>
        </div>}
    </div>
  );
}

export default IconWithDiv;
