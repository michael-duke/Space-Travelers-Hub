import React from 'react';
import PropTypes from 'prop-types';
import RocketGIF from '../assets/rocket-loading.gif';
import MIssionGIF from '../assets/mission-loading.gif';

const Loading = ({ message }) => (
  <div className="flex justify-center items-center min-h-screen">
    <img className="w-96 h-96 sm:w-64 sm:h-64 mt-12 rounded-full object-cover" src={message === 'rocket' ? RocketGIF : MIssionGIF} alt="rocket-ship-gif" />
  </div>
);

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Loading;
