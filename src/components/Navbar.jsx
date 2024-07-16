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
            <li><a className="dropdown-item language-item" onClick={() => changeLanguage('cy')}>CY</a></li>
        </ul>
    );
};

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <>
            {/* Navbar for large screens */}
            <nav className="d-none d-lg-block lr-pad-none">
                <ul className="navbar-nav side-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa-solid fa-house"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa-solid fa-user"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa-solid fa-tag"></i></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-comment"></i>
                        </a>
                        <LanguageSwitcher />
                    </li>
                </ul>
            </nav>

            {/* Navbar for small and medium screens */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-lg-none w-100 lr-pad-none">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Charlotte Stone</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">{t('home')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">{t('features')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">{t('pricing')}</a>
                            </li>
                            <li id="language-dropdown-sm" className="nav-item dropdown">
                                {/* Language switcher for small and medium screens */}
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('Languages')}
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
