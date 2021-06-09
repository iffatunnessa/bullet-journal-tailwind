import React from 'react';
import fav1 from '../../images/washi-bd-culture.jpeg';
import fav2 from '../../images/washi-bd.jpeg';
import fav3 from '../../images/washi-florals.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const AungkonWT = "https://thewashitapeshop.com/collections/featured-collection/products/aungkon-washi-tape-set";
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
            <div className="mt-40 flex justify-center">
                  <button  className="bg-yellow-900 text-white opacity-90 hover:opacity-60 p-3 rounded">Aungkon Washi Tape <FontAwesomeIcon className="text-md mx-2" icon={faExternalLinkAlt} onClick={() => window.open(AungkonWT, "_blank")} /> </button>
            </div>
          
            {/* <div className="bg-dottedBanner w-30 h-40 opacity-20 -my-30 z-0"></div> */}
        </>

    );
};

export default Home;