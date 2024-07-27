import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

const RecentProjects = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./works/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const reversedProjects = [...projects].reverse();

    const groupedProjects = [];
    for (let i = 0; i < reversedProjects.length; i += 3) {
        groupedProjects.push(reversedProjects.slice(i, i + 3));
    }

    return (
        <section className="row g-5 mx-2">
            <div className="container">
                <h2>{t('RecentProjects')}</h2>
                <div id="recentProjectsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {groupedProjects.map((group, groupIndex) => (
                            <div key={groupIndex} className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}>
                                <div className="row g-5 mx-2 justify-content-around">
                                    {group.map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#recentProjectsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#recentProjectsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
