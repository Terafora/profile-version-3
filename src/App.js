import './App.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <MainContent />
        <div className="row">
          {/* Recent Work Section */}
          <h2>{t('recentWork')}</h2>
          <div className="container">
            <div className="row g-5 mx-2 justify-content-around">
              <div className="card col-lg-3 col-md-6 col-sm-9">
                <img src="#" className="Recent-Work-Img" alt="Image of a website I've made" />
                <h4 className="text-center">{t('title')}</h4>
              </div>
              <div className="card col-lg-3 col-md-6 col-sm-9">
                <img src="#" className="Recent-Work-Img" alt="Image of a website I've made" />
                <h4 className="text-center">{t('title')}</h4>
              </div>
              <div className="card col-lg-3 col-md-6 col-sm-9">
                <img src="#" className="Recent-Work-Img" alt="Image of a website I've made" />
                <h4 className="text-center">{t('title')}</h4>
              </div>
            </div>
          </div>

          {/* About Charlotte Section */}
          <h2>{t('about')}</h2>
          <div className="row g-5 mx-2">
            <div className="col-6">
              <h3>{t('hello')}</h3>
              <p>{t('aboutText')}</p>
            </div>
            <div className="col-6">
              <img src="#" className="img-fluid" alt="Image of Charlotte Stone" />
            </div>
          </div>

          {/* Recent Posts Section */}
          <h2>{t('recentPosts')}</h2>

          {/* Contact Section */}
          <h2>{t('contact')}</h2>
          <section className="row g-5 mx-2">
            <div className="col-6">
              <h3>{t('letMeHelpYou')}</h3>
            </div>
            <div className="col-6">
              <p>{t('contactText')}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
