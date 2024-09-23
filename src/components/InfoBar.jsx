import React from 'react';
import { useTranslation } from 'react-i18next';

export default function InfoBar() {
    const { t } = useTranslation();

    return (
        <div className="infobar">
            <div className="scroll-text">
                <p>{t('infoBar')}</p>
            </div>
        </div>
    );
}
