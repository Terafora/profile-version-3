import React from 'react';
import { useTranslation } from 'react-i18next';


const languages = [
    { code: 'en', label: 'EN', text: 'En' },
    { code: 'jp', label: '日本', text: '日本' },
    { code: 'cy', label: 'CY', text: 'CY' }
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div id="language-switcher">
            {languages.map(lang => {
                console.log(`Rendering button for: ${lang.label}`);
                return (
                    <button
                        key={lang.code}
                        className="language-button"
                        onClick={() => changeLanguage(lang.code)}
                    >
                        {lang.label}
                    </button>
                );
            })}
        </div>
    );
};

export default LanguageSwitcher;
