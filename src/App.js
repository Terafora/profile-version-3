import './App.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import InfoBar from './components/InfoBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import RecentProjects from './components/RecentProjects';
import RecentTranslations from './components/RecentTranslations';
import About from './components/About';
import Contact from './components/Contact';
import Technologies from './components/Technologies'; 
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <div className="bg">
      <div className="App">
        <Navbar />
        <InfoBar className="infobar"/>
        <div className="container-fluid">
          <MainContent />
          <About />
          <Technologies />
          <RecentProjects/>
          <RecentTranslations  />
          <Contact />
        </div>  
      </div>
      <Footer />
    </div>
  );
}

export default App;
