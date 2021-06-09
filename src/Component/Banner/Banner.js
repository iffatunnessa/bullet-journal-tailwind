import React from 'react';
import Icons from '../icon/Icons';

const Banner = () => {
    return (
        <div className="p-4">
            <div>
                <div className="text-right p-3">
                    <Icons />
                </div>
            </div>
            <div className="bg-local bg-cover bg-center h-96 bg-yellow-100 ">
                <h1 className="pt-20 text-center text-7xl">Iffa's Bullet Journal and Art tour</h1>
                <h1 className="pt-12 text-center text-4xl">Tritopus Journal | @tritopus_</h1>
            </div>
        </div>
    );
};

export default Banner;