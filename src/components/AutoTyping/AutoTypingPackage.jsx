// https://www.npmjs.com/package/react-type-animation
// https://github.com/maxeth/react-type-animation#readme
// https://react-type-animation.netlify.app/

import { TypeAnimation } from 'react-type-animation';

const AutoTypingPackage = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Web Design',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Web Development',
          1000,
          'We produce food for Guinea Pigs',
          1000,
          'We produce food for Chinchillas',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </>
  )
}

export default AutoTypingPackage