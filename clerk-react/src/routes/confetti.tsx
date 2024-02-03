import  { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

const ConfettiAnimation = () => {
  const [isConfettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    // Trigger confetti after a delay (for example, when the component mounts)
    const confettiTimeout = setTimeout(() => {
      setConfettiActive(true);
    }, 1000);

    // Clean up timeout to avoid memory leaks
    return () => clearTimeout(confettiTimeout);
  }, []);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 50,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#F6AD55'],
  };

  return (
    <div className='flex justify-center' style={{ position: 'relative', minHeight: '200px' }}>
      <Confetti active={isConfettiActive} config={confettiConfig} />
    </div>
  );
};

export default ConfettiAnimation;
