import React from 'react';
import { useTranslation } from 'react-i18next';

export default function RecentProjects() {
    const {t} = useTranslation();

    return (
        <section className="row">
            <h2>{t('RecentProjects')}</h2>
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
        </section>
    );
}