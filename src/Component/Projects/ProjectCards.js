import React from 'react';
const ProjectCards = ({data}) => {
    const {image, link, title, details} = data;
    return (
        <div className="transform transition duration-500 hover:scale-110 hover:opacity-80 w-64" onClick={() => window.open(link, "_blank")}>
            <img className= "h-64"src = {image} alt="" />
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
    );
};

export default ProjectCards;