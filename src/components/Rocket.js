import React from 'react';
import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const Rocket = ({
  rocketId, rocketImage, rocketName, rocketDescription, reserved, handleBooking,
}) => (
  <div className="flex sml:flex-col gap-6">
    <img
      className="w-1/4 sml:w-fit sm:w-1/2 h-fit"
      src={rocketImage}
      alt={rocketName}
    />
    <div className="text-left">
      <h3 className="font-bold">{ rocketName }</h3>
      <p className="my-2">
        { reserved ? (
          <span
            className="text-xs inline-block py-1 px-2.5 mr-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded-full"
          >
            Reserved
          </span>
        ) : '' }
        { rocketDescription }
      </p>
      <Button
        id={rocketId}
        onClick={() => handleBooking(rocketId)}
        className={` shadow-none bg-blue-700 p-2.5 rounded-md border-blue-700 border-2 hover:shadow-blue-500 hover:text-blue-500 hover:bg-white ${reserved ? 'text-gray-800 border-2 border-gray-800 bg-white hover:text-white hover:bg-gray-800 hover:shadow-gray-500' : ''}`}
      >
        { reserved ? 'Cancel Reservation' : 'Reserve Rockets' }
      </Button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  handleBooking: PropTypes.func.isRequired,
};

export default Rocket;
