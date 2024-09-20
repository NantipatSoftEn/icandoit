import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date:Date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div>
      <h1>Digital Clock</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default Clock;