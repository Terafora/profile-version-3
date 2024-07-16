import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button className='btn btn-success' onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('jp')}>日本語</button>
            <button onClick={() => changeLanguage('cy')}>Cymraeg</button>
        </div>
    );
};

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <>
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
                    <li className="nav-item">
                        {/* Language switcher for large screens */}
                        <div className="d-none d-lg-block">
                            <LanguageSwitcher />
                        </div>
                    </li>
                </ul>
            </nav>

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
                            <li className="nav-item">
                                {/* Language switcher for small and medium screens */}
                                <div className="d-lg-none justify-content-center">
                                    <LanguageSwitcher />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
