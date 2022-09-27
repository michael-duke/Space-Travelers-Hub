import React from 'react';
import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const Rocket = ({
  rocketId, rocketImage, rocketName, rocketDescription, rocketReservation, handleBooking,
}) => (
  <div className="flex sml:flex-col gap-6">
    <img
      className="w-1/4 sml:w-fit sm:w-1/2 h-fit"
      src={rocketImage}
      alt={rocketName}
    />
    <div className="text-left">
      <h3 className="font-bold">{ rocketName }</h3>
      <p className="my-2">{ rocketDescription }</p>
      <Button
        id={rocketId}
        onClick={() => handleBooking(rocketId)}
        className={` shadow-none bg-blue-700 p-2.5 rounded-md border-blue-500 border-2 hover:shadow-blue-500 hover:text-blue-500 hover:bg-white ${rocketReservation ? 'text-gray-800 border-2 border-gray-800 bg-white hover:text-white hover:bg-gray-800' : ''}`}
      >
        { rocketReservation ? 'Cancel Reservation' : 'Reserve Rockets' }
      </Button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  rocketReservation: PropTypes.bool.isRequired,
  handleBooking: PropTypes.func.isRequired,
};

export default Rocket;
