import React, { useState } from 'react';
import ProjectCards from './ProjectCards';
import fakeProject from '../../fakedata/fakaProject';

const Projects = () => {
    const [fakeData, setFakeData] = useState(fakeProject);
    return (
        <div className ="container mx-auto mt-40 ">
            <h1 className="text-4xl pb-10 text-center">Instagram Posts</h1>
            <div class="grid lg:grid-flow-col sm:grid-flow-row justify-center gap-10">
                {fakeData.map(data => <ProjectCards data={data} />)}
            </div>
        </div>
    );
};

export default Projects;