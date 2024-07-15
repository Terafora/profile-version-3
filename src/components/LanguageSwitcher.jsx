import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div id="language-switcher">
            <button id="language-button" onClick={() => changeLanguage('en')}>EN</button>
            <button id="language-button2" onClick={() => changeLanguage('jp')}>日本</button>
        </div>
    );
};

export default LanguageSwitcher;
