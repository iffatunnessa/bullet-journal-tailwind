import React from 'react';
import mostViewed from '../../images/oct.jpg';
import newVideo from '../../images/june.jpg'
const Youtube = () => {
    const link1 = "https://www.youtube.com/watch?v=ixUFVsKyRIc";
    const link2 = "https://www.youtube.com/watch?v=vXtqt6lqld0";
    return (
        <div className="container mx-10 my-20">
            <h1 className="text-4xl pb-10 text-center">YouTube Videos</h1>
            <div class="grid lg:grid-flow-col md:grid-flow-row sm:grid-flow-row justify-center gap-20">
                <div >
                    <img className="transform transition duration-500 hover:scale-110 hover:opacity-80 w-64" src={newVideo} alt="" onClick={() => window.open(link1, "_blank")}/>
                    <h1 className="text-2xl py-10 text-center">Latest Video</h1>
                </div>
                <div >
                    <img className="transform transition duration-500 hover:scale-110 hover:opacity-80 w-64" src={mostViewed} alt="" onClick={() => window.open(link2, "_blank")}/>
                    <h1 className="text-2xl py-10 text-center">Popular Video</h1>
                </div>
            </div>
        </div>
    );
};

export default Youtube;