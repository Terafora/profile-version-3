import React from 'react';
import { useTranslation } from 'react-i18next';

const TranslationCard = ({ translation }) => {
    const { t } = useTranslation();

    return (
        <div className="card card-appearance wave-container col-lg-3 col-md-6 col-sm-9">
            <img src={translation.imgSrc} className="Recent-Work-Img card-img" alt={translation.altText} />
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>
            <h4 className="text-center">{t(`translations.${translation.id}.title`)}</h4>
            <a href={translation.url} className="btn btn-primary" target='_blank' rel="noreferrer">{t('learnMore')}</a>
        </div>
    );
};

export default TranslationCard;
