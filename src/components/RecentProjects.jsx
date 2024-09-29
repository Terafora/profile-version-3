import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

const RecentProjects = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);
    const [visibleGroups, setVisibleGroups] = useState(1);

    useEffect(() => {
        fetch('./works/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const reversedProjects = [...projects].reverse();

    // Calculate the total number of groups (each group contains up to 3 projects)
    const totalGroups = Math.ceil(reversedProjects.length / 3);
    const groupedProjects = [];
    for (let i = 0; i < reversedProjects.length; i += 3) {
        groupedProjects.push(reversedProjects.slice(i, i + 3));
    }

    const handleNext = () => {
        // Check if there are more groups to display
        if (visibleGroups < totalGroups) {
            setVisibleGroups(visibleGroups + 1);
        }
    };

    return (
        <section className="row g-5 mx-2 recent-projects" id="Projects">
            <div className="container">
                <h2>{t('RecentProjects')}</h2>
                {groupedProjects.slice(0, visibleGroups).map((group, index) => (
                    <div key={`group-${index}`} className={`${index === 0 ? 'active' : ''}`}>
                        <div className="row g-5 mx-2 justify-content-around">
                            {group.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                ))}
                {visibleGroups < totalGroups && (
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-learn"
                            onClick={handleNext}
                        >
                            {t('showMore')}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RecentProjects;
