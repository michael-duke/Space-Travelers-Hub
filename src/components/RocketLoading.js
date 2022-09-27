import React from 'react';
import RocketGIF from '../assets/rocket-loading.gif';

const RocketLoading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <img className="w-64 h-64 rounded-full object-cover" src={RocketGIF} alt="rocket-ship-gif" />
  </div>
);

export default RocketLoading;
