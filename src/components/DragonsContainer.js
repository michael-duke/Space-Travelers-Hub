import React from 'react';
import dragonImg from '../assets/dragon-toothless.jpg';

const DragonsContainer = () => (
  <div className="flex items-center border-deep-orange-300 border min-h-screen">
    <img src={dragonImg} alt="dragom-img" className="cursor-pointer w-2/3 h-80 mx-auto my-auto object-cover hover:scale-105 transition duration-500" />
  </div>
);

export default DragonsContainer;
