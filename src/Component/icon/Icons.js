import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
const Icons = () => {
    const youtube = "https://www.youtube.com/channel/UCsJoGRFRBShifOYp97ZAV2w";
    const instagram = "https://www.instagram.com/tritopus_/";
    const pinterest = "https://www.pinterest.com/tritopus/";
    const facebook = "https://www.facebook.com/Tritopus-Journal-107149224798384";
    return (
        <>
              <FontAwesomeIcon className="text-2xl mx-2 transform transition duration-500 hover:text-blue-600 hover:scale-110 " icon={faFacebook} onClick={() => window.open(facebook, "_blank")} />
                    <FontAwesomeIcon className="text-2xl mx-2 transform transition duration-500 hover:text-pink-600 hover:scale-110" icon={faInstagram} onClick={() => window.open(instagram, "_blank")} />
                    <FontAwesomeIcon className="text-2xl mx-2 transform transition duration-500 hover:text-red-700 hover:scale-110" icon={faYoutube} onClick={() => window.open(youtube, "_blank")} />
                    <FontAwesomeIcon className="text-2xl mx-2 transform transition duration-500 hover:text-red-600 hover:scale-110" icon={faPinterest} onClick={() => window.open(pinterest, "_blank")} />
        </>
    );
};

export default Icons;