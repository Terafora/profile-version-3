import React from 'react';
import { useTranslation } from 'react-i18next';

export default function InfoBar() {
    const { t } = useTranslation();

    return (
        <div className="infobar">
            <div className="row g-5 mx-2">
                <div className="col-6">
                    <p>{t('infoBar')}</p>
                </div>
            </div>
        </div>
    );
}
