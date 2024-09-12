import React from 'react';
import { useTranslation } from 'react-i18next';

export default function RecentPosts() {
    const { t } = useTranslation();

    return (
        <section className="row">
            <h2>{t('RecentPosts')}</h2>
            <div className="container">
                <div id="recentPostsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
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
                    </div>

                    {/* Move the buttons below the items */}
                    <div className="carousel-controls mt-3 text-center">
                        <button className="carousel-control-prev" type="button" data-bs-target="#recentPostsCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#recentPostsCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
