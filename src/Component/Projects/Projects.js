import React, { useState } from 'react';
import ProjectCards from './ProjectCards';
import fakeProject from '../../fakedata/fakaProject.json';

const Projects = () => {
    const [fakeData, setFakeData] = useState(fakeProject);
    return (
        <div className ="container mx-10 my-60 ">
            <div class="flex flex-wrap gap-12">
                {fakeData.map(data => <ProjectCards data={data} />)}
            </div>
        </div>
    );
};

export default Projects;