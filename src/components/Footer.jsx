import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="container">
                <div className="row g-5 mx-2 justify-content-center align-items-center">
                    {/* Center the text in this div */}
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <p>{t('footer')}</p>
                    </div>
                    {/* Center the icons in this div */}
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <a href="https://github.com/Terafora" target='_blank' rel="noreferrer">
                            <img src="./pictures/icons/Github.svg" className="footer-icons" alt={t('GithubIcon')} />
                        </a>
                        <a href="https://www.freecodecamp.org/japanese/news/author/charlotte-stone/" target='_blank' rel="noreferrer">
                            <img src="./pictures/icons/freeCodeCamp.svg" className="footer-icons" alt={t('freeCodeCampIcon')} />
                        </a>
                        <a href="https://www.linkedin.com/in/charlotte-stone-web/" target='_blank' rel="noreferrer">
                            <img src="./pictures/icons/LinkedIn.svg" className="footer-icons" alt={t('LinkedInIcon')} />
                        </a>
                        <a href="https://bsky.app/profile/terafora.bsky.social" target='_blank' rel="noreferrer">
                            <img src="./pictures/icons/BlueSky.svg" className="footer-icons" alt={t('BlueSkyIcon')} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
