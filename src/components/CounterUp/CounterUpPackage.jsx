import React from 'react';
// https://www.npmjs.com/package/react-countup
// https://github.com/glennreyes/react-countup
import CountUp from 'react-countup';
const AutoCounterUpPackage = ({ start, end, duration }) => {
  return (
    <>
      <CountUp start={start} end={end} decimal="," duration={duration} /><br />
      {/* <CountUp start={0} end={100} duration={5} /> */}
    </>
  )
}

export default AutoCounterUpPackage