import { useEffect, useState } from "react";

const AutoCounterUpCoustome = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const increment = (end / duration) * progress;

      if (progress < duration) {
        setCount(Math.floor(increment));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
    return () => {
      startTimestamp = null;
    };
  }, [end, duration]);

  return <span className="counter">{count}+</span>;
};

export default AutoCounterUpCoustome

// Call this components
{/* 

<AutoCounterUpCoustome end={100} duration={3000} />
start-count = by default 0
end-count   = end={100}
duration    = duration={3000} --- 3 secound

*/ }