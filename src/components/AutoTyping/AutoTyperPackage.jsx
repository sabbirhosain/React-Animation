// https://www.npmjs.com/package/typewriter-effect
// https://github.com/tameemsafi/typewriterjs

import Typewriter from 'typewriter-effect';

const AutoTyperPackage = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Web Designer','Web Developer','Problem Solving Expert'],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  )
}

export default AutoTyperPackage