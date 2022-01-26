import React from 'react'
import{Swiper} from 'swiper/react';
import Projects from '../assets/Projects';

function Projects() {
    return (
        <div>
        <div className="container">
            <SectionTitle heading="Projects" subheading="some of day projects"/>
            <div className="projects_allitems">
            <Swiper>

            </Swiper>
            </div>
        </div>
        </div>
    )
}

export default Projects
