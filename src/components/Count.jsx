import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-08-30T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className=''>
        <span className='interf text-[130%] md:text-[100px]'>{String(time.days).padStart(2, '0')}:</span>
        <span className='interf text-[130%] md:text-[100px]'>{String(time.hours).padStart(2, '0')}:</span>
        <span className='interf text-[130%] md:text-[100px]'>{String(time.minutes).padStart(2, '0')}:</span>
        <span className='interf text-[130%] md:text-[100px]'>{String(time.seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default Countdown;
