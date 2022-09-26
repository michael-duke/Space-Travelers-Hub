import React from 'react';
import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const RocketList = ({
  rocketImage, rocketName, rocketDescription,
}) => (
  <div>
    <img
      className=""
      src={rocketImage}
      alt={rocketName}
    />
    <div className="">
      <h3>{ rocketName }</h3>
      <p>{ rocketDescription }</p>
      <Button
        className=""
      >
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
