import React from 'react';
import PropTypes from 'prop-types';
import RocketGIF from '../assets/rocket-loading.gif';
import MissionGIF from '../assets/mission-loading.gif';
import DragonGIF from '../assets/dragon-loading.gif';

const loadingGIF = {
  mission: MissionGIF,
  rocket: RocketGIF,
  dragon: DragonGIF,
};

const Loading = ({ message }) => (
  <div className="flex justify-center items-center min-h-screen">
    <img
      className="w-96 h-96 sm:w-64 sm:h-64 mt-12 rounded-full object-cover"
      src={loadingGIF[message]}
      alt={`${message}-loading-gif`}
    />
  </div>
);

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Loading;
