import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {

    const { t } = useTranslation();

    return (
        <footer>
            <div class="container">
                <div class="row g-5 mx-2">
                    <div class="col-6">
                        <p>Charlotte Stone Web Designs</p>
                    </div>
                    <div class="col-6">
                        <p>Designed and Developed by Charlotte Stone</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}