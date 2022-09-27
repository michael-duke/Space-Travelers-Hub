import React from 'react';
import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const Rocket = ({
  rocketId, rocketImage, rocketName, rocketDescription, rocketReservation, handleBooking,
}) => (
  <div className="flex gap-6">
    <img
      className="w-1/5 sm:w-1/2 h-fit"
      src={rocketImage}
      alt={rocketName}
    />
    <div className="text-left">
      <h3 className="font-bold">{ rocketName }</h3>
      <p className="my-2">{ rocketDescription }</p>
      <Button
        id={rocketId}
        onClick={() => handleBooking(rocketId)}
        className={rocketReservation ? 'bg-blue-700 px-2.5 py-2.5 rounded-md text-gray-800 border-2 border-gray-800 bg-white hover:text-white hover:border-none hover:bg-gray-800'
          : 'bg-blue-700 px-2.5 py-2.5 rounded-md hover:bg-white hover:text-blue-700 hover:border-2 hover:border-blue-700'}
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
