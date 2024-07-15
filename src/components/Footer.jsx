import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {

    const { t } = useTranslation();

    return (
        <footer>
            <div class="container">
                <div class="row g-5 mx-2">
                    <div class="col-12">
                        <p>{t('footer')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}