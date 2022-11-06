import React from 'react';
import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const Dragon = ({
  dragonId, dragonImage, dragonName, dragonType, reserved, handleReserve,
}) => (
  <div className="flex sml:flex-col gap-6 basis-1/2">
    <img
      className="w-1/4 sml:w-fit sm:w-1/2 h-fit"
      src={dragonImage}
      alt={dragonName}
    />
    <div className="text-left">
      <h3 className="font-bold">{dragonName}</h3>
      <p className="my-2">
        {reserved ? (
          <span className="text-xs inline-block py-1 px-2.5 mr-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded-full">
            Reserved
          </span>
        ) : (
          ''
        )}
        {dragonType}
      </p>
      <Button
        id={dragonId}
        onClick={() => handleReserve(dragonId)}
        className={` shadow-none bg-blue-700 p-2.5 rounded-md border-blue-700 border-2 hover:shadow-blue-500 hover:text-blue-500 hover:bg-white ${
          reserved
            ? 'text-gray-800 border-2 border-gray-800 bg-white hover:text-white hover:bg-gray-800 hover:shadow-gray-500'
            : ''
        }`}
      >
        {reserved ? 'Cancel Reservation' : 'Reserve Dragons'}
      </Button>
    </div>
  </div>
);

Dragon.propTypes = {
  dragonId: PropTypes.string.isRequired,
  dragonImage: PropTypes.string.isRequired,
  dragonName: PropTypes.string.isRequired,
  dragonType: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  handleReserve: PropTypes.func.isRequired,
};

export default Dragon;
