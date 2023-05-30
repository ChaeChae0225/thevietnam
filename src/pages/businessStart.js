import React, { useState } from 'react';
import './businessStart.css';
import Header from '../components/header';
import Consulting from '../components/Consulting';
import Process from '../components/Process';

function Business() {
  const [showConsulting, setShowConsulting] = useState(true);

  const handleConsultingClick = () => {
    setShowConsulting(true);
  };

  const handleProcessClick = () => {
    setShowConsulting(false);
  };

  return (
    <div>
      <Header />
      <div className='choose_box'>
        <div
          className={`choose_box1 ${showConsulting ? 'active' : ''}`}
          onClick={handleConsultingClick}
        >
          가맹 상담
        </div>
        <div
          className={`choose_box2 ${!showConsulting ? 'active' : ''}`}
          onClick={handleProcessClick}
        >
          가맹 절차 및 조건
        </div>
      </div>
      {showConsulting ? <Consulting /> : <Process />}
    </div>
  );
}

export default Business;
