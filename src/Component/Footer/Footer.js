import React from 'react';
import Icons from '../icon/Icons';

const Footer = () => {
    return (
        <div className="h-80 bg-gray-100">
            <div class="grid grid-cols-3 gap-4">
                <div className="mx-20 my-20">
                    <h1 className="text-4xl py-10 text-left">Subscribe</h1>
                    <div><Icons /></div>
                </div>
                <div className="col-span-2 mx-20 my-20">
                    <h1 className="text-6xl py-10 text-right">Tritopus Journal</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;