import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import HomePage from './components/Home'


const App = () => {
  document.title = "Maria Nevarez"
  const [burger, setburgerState] = useState({
    open: "false",
    options: [],
    link: '',
    description: "",
    onClick: (open) => {
      setburgerState({ ...burger, open })
    }
  })
  return (
    <div>
      <Router>

        {/* <Background /> */}
        {/* <Wrapper>
          <Route exact path="/" />
          <Route exact path="/portfolio" />
          <Route exact path="/Contact" />
        </Wrapper> */}
        <Header />
        <HomePage />
        <Portfolio />
        <Contact />
      </Router>

    </div>
  );
}

export default App;
