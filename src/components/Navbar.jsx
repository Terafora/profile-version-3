import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <ul className="dropdown-menu language-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item language-item" onClick={() => changeLanguage('en')}>EN</a></li>
            <li><a className="dropdown-item language-item" onClick={() => changeLanguage('jp')}>日本</a></li>
            <li><a className="dropdown-item language-item" onClick={() => changeLanguage('fr')}>FR</a></li>
            <li><a className="dropdown-item language-item" onClick={() => changeLanguage('cy')}>CY</a></li>
        </ul>
    );
};

export default function Navbar() {
    const { t } = useTranslation();

        const handleSmoothScroll = (e, targetId) => {
        e.preventDefault(); // Prevent the default anchor behavior
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll with an offset
            const offsetPosition = targetElement.offsetTop - 90;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Navbar for large screens */}
            <nav className="d-none d-lg-block lr-pad-none">
                <ul className="navbar-nav side-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={(e) => handleSmoothScroll(e, 'Home')}>
                            <img src="./pictures/icons/HomeIcon.svg" alt="Home Button"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#About" onClick={(e) => handleSmoothScroll(e, 'About')}>
                            <img src="./pictures/icons/AboutIcon.svg" alt="About Button"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Technologies" onClick={(e) => handleSmoothScroll(e, 'Technologies')}>
                            <img src="./pictures/icons/TechIcon.svg" alt="About Button"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Projects" onClick={(e) => handleSmoothScroll(e, 'Projects')}>
                            <img src="./pictures/icons/WorkIcon.svg" alt="About Button"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact" onClick={(e) => handleSmoothScroll(e, 'Contact')}>
                            <img src="./pictures/icons/MailIcon.svg" alt="About Button"/>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="./pictures/icons/LanguageIcon.svg" alt="Language Button"/>
                        </a>
                        <LanguageSwitcher />
                    </li>
                </ul>
            </nav>

           <nav className="navbar navbar-expand-lg bg-body-tertiary d-lg-none w-100 lr-pad-none">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Charlotte Stone</a>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#Home" onClick={(e) => handleSmoothScroll(e, 'Home')}>
                                    {t('home')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#About" onClick={(e) => handleSmoothScroll(e, 'About')}>
                                    {t('about')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#Technologies" onClick={(e) => handleSmoothScroll(e, 'Technologies')}>
                                    {t('technologies')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#Projects" onClick={(e) => handleSmoothScroll(e, 'Projects')}>
                                    {t('project')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#Contact" onClick={(e) => handleSmoothScroll(e, 'Contact')}>
                                    {t('contact')}
                                </a>
                            </li>
                            <li id="language-dropdown-sm" className="nav-item dropdown">
                                {/* Language switcher for small and medium screens */}
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('languages')}
                                </a>
                                <LanguageSwitcher />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
