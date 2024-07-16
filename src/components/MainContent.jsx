import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MainContent() {
    const { t } = useTranslation();

    return (
        <div className="main-container">
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="row g-5 mx-2">
                    <div className="col text-center">
                        <h1 className="headline-one">{t('name')}</h1>
                        <h2 className="lead">{t('title')}</h2>
                        <br></br>
                        <button className="btn-learn px-5 py-3" onClick={() => {}}>{t('learnMore')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
