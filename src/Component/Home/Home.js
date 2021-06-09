import React from 'react';
import fav1 from '../../images/washi-bd-culture.jpeg';
import fav2 from '../../images/washi-bd-culture.jpeg';
import fav3 from '../../images/washi-bd-culture.jpeg';

const Home = () => {
    return (
        <>
        <div className="mx-60 z-10">
            <div className="flex lg:flex-row sm:flex-col justify-center gap-10 text-center -my-20">
                <div>
                    <img className="p-1 bg-white" src={fav1} alt="" />
                    <h6>Aunkon Washi Tape Set</h6>
                    <small>March 21, 2021</small>
                </div>
                <div>
                    <img className="p-1 bg-white" src={fav2} alt="" />
                    <h6>Aunkon Washi Tape Set</h6>
                    <small>March 21, 2021</small>
                </div>
                <div>
                    <img className="p-1 bg-white" src={fav3} alt="" />
                    <h6>Aunkon Washi Tape Set</h6>
                    <small>March 21, 2021</small>
                </div>
            </div>
        </div>
        
        {/* <div className="bg-dottedBanner w-30 h-40 opacity-20 -my-30 z-0"></div> */}
</>

    );
};

export default Home;