import './App.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import RecentProjects from './components/RecentProjects';
import RecentTranslations from './components/RecentTranslations';
import About from './components/About';
import RecentPosts from './components/RecentPosts';
import Contact from './components/Contact';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <MainContent />
        <About />
        <RecentProjects/>
        <RecentTranslations  />
        <RecentPosts />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
