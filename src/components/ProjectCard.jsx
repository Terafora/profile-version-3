import React from 'react';
import Wave from './Wave';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
    const { t } = useTranslation();

    return (
        <div className="card card-appearance justify-content-between col-lg-3 col-md-6 col-sm-9 mb-5">
            <Wave />
            <img src={project.imgSrc} className="Recent-Work-Img card-img" alt={project.altText} />
            <h4 className="text-center">{t(`projects.${project.id}.title`)}</h4>
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>
            <p>{t(`projects.${project.id}.description`)}</p>
            <a href={project.url} className="btn btn-learn" target='_blank' rel="noreferrer">{t('learnMore')}</a>
        </div>
    );
};

export default ProjectCard;
