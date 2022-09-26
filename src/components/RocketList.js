import React from 'react';
import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const RocketList = ({
  rocketImage, rocketName, rocketDescription,
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
      <Button>
        Reserve Rockets
      </Button>
    </div>
  </div>
);

RocketList.propTypes = {
  rocketImage: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
};

export default RocketList;
