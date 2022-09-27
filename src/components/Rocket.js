import React from 'react';
import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const Rocket = ({
  rocketId, rocketImage, rocketName, rocketDescription,
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
      <Button id={rocketId}>
        Reserve Rockets
      </Button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
};

export default Rocket;
