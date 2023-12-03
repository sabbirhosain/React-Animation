import React from 'react';
// https://www.npmjs.com/package/react-countup
// https://github.com/glennreyes/react-countup
import CountUp from 'react-countup';
const AutoCounterUpPackage = () => {
  return (
    <>
      <CountUp start={0} end={1000} decimal="," duration={5} /><br />
      <CountUp start={0} end={100} duration={5} />
    </>
  )
}

export default AutoCounterUpPackage