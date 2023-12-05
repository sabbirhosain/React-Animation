import AutoTyperPackage from "./components/AutoTyping/AutoTyperPackage";
import AutoTypingCoustome from "./components/AutoTyping/AutoTypingCoustome";
import AutoTypingPackage from "./components/AutoTyping/AutoTypingPackage"
import AutoCounterUpCoustome from "./components/CounterUp/CounterUpCoustome"
import AutoCounterUpPackage from "./components/CounterUp/CounterUpPackage";

function App() {
  const texts = ['Web Designer  ', 'Web Developer  ', 'Problem Solving Expert  '];
  return (
    <div style={{ padding: "100px" }}>

      <h3> Auto Incrementing CounterUp Package &nbsp;&nbsp;
        <a href="https://github.com/glennreyes/react-countup" target="_blank">GitHub</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.npmjs.com/package/react-countup" target="_blank">NPM</a>
      </h3>
      <h1><AutoCounterUpPackage start={0} end={100} duration={5} /></h1>

      {/* =============================================================== */}
      <br /><br /><br /><br />
      {/* =============================================================== */}

      <h3>Auto Incrementing CounterUp Coustome &nbsp;&nbsp;
        <a href="https://github.com/sabbirhosain/React-Animation" target="_blank">GitHub</a>
      </h3>
      <h1><AutoCounterUpCoustome end={100} duration={3000} /></h1>

      {/* ============================================================= */}
      <br /><br /><br /><br />
      {/* ======================================================== */}

      <h3>Auto Typing Package (react-type-animation) &nbsp;&nbsp;
        <a href="https://www.npmjs.com/package/react-type-animation" target="_blank">NPM</a> &nbsp;&nbsp;
        <a href="https://github.com/maxeth/react-type-animation#readme" target="_blank">GotHub</a> &nbsp;&nbsp;
        <a href="https://react-type-animation.netlify.app/" target="_blank">Documentation</a>
      </h3>
      <AutoTypingPackage />

      {/* ================================================ */}
      <br /><br /><br /><br />
      {/* ============================================== */}

      <h3>Auto Typing Coustome &nbsp;&nbsp;
        <a href="https://github.com/sabbirhosain/React-Animation" target="_blank">GitHub</a>
      </h3>
      <h1><AutoTypingCoustome texts={texts} speed={100} delay={15000} /></h1>

      {/* =============================================== */}
      <br /><br /><br /><br />
      {/* =========================================== */}

      <h3>Auto Typing Package (typewriter-effect) &nbsp;&nbsp;
        <a href="https://www.npmjs.com/package/typewriter-effect" target="_blank">NPM</a> &nbsp;&nbsp;
        <a href="https://github.com/tameemsafi/typewriterjs" target="_blank">GitHub</a>
      </h3>
      <h1><AutoTyperPackage /></h1>

    </div>
  )
}

export default App
