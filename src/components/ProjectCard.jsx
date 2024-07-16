import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
    const { t } = useTranslation();

    return (
        <div className="card col-lg-3 col-md-6 col-sm-9">
            <img src={project.imgSrc} className="Recent-Work-Img" alt={project.altText} />
            <h4 className="text-center">{t(`projects.${project.id}.title`)}</h4>
            <p>{t(`projects.${project.id}.description`)}</p>
            <a href={project.url} className="btn btn-primary">{t('learnMore')}</a>
        </div>
    );
};

export default ProjectCard;
