import React from 'react';
import './App.css';
import IntroductionSection from './components/introduction-section/introduction-section.component';
import BodySection from './components/body-section/body-section.component';

function App() {
  return (
    <div className="App">
      <IntroductionSection />
      <BodySection type='AboutMe'/>
      <BodySection type='Experience'/>
    </div>
  );
}

export default App;
