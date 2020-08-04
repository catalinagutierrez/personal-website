import React from 'react';
import './App.css';
import IntroductionSection from './components/introduction-section/introduction-section.component';
import BodySection from './components/body-section/body-section.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';

import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <IntroductionSection />
                <BodySection type='AboutMe' />
                <BodySection type='Experience' />
                <BodySection type='Portfolio' />
                <Footer />
            </div>
        );
    }
}

export default App;
