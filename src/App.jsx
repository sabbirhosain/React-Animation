import AutoTyperPackage from "./components/AutoTyping/AutoTyperPackage";
import AutoTypingCoustome from "./components/AutoTyping/AutoTypingCoustome";
import AutoTypingPackage from "./components/AutoTyping/AutoTypingPackage"
import AutoCounterUpCoustome from "./components/CounterUp/CounterUpCoustome"
import AutoCounterUpPackage from "./components/CounterUp/CounterUpPackage";

function App() {
  const texts = ['Web Designer  ', 'Web Developer  ', 'Problem Solving Expert  '];
  return (
    <>
      <h4>Auto Incrementing Counter Package</h4>
      <AutoCounterUpPackage />

      <br /><br /><br /><br />

      <h4>Auto Incrementing Counter Coustome</h4>
      <AutoCounterUpCoustome end={100} duration={3000} />

      <br /><br /><br /><br />

      <h4>Auto Typing Package (react-type-animation)</h4>
      <AutoTypingPackage />

      <br /><br /><br /><br />

      <h4>Auto Typing Coustome</h4>
      <AutoTypingCoustome texts={texts} speed={100} delay={15000} />


      <br /><br /><br /><br />

      <h4>Auto Typing Package (typewriter-effect)</h4>
      <AutoTyperPackage />


    </>
  )
}

export default App
