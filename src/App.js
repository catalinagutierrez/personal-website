import React from 'react';
import './App.css';
import Introduction from './components/introduction/introduction.component';
import Body from './components/body/body.component';
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
                <Introduction />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;
