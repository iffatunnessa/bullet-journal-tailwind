import React from 'react';
import project from '../../images/washi-florals.jpeg'
const ProjectCards = ({data}) => {
    const {link, title, details} = data;
    return (
        <div className="transform transition duration-500 hover:scale-110 w-96" onClick={() => window.open(link, "_blank")}>
            <img src = {project} alt="" />
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
    );
};

export default ProjectCards;