import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <HeroSection />
            <Specials />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;