import React from 'react';
import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketList = ({ rockets, handleBooking }) => (
  <>
    {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.rocketId}
            rocketImage={rocket.rocketImage}
            rocketName={rocket.rocketName}
            rocketDescription={rocket.rocketDescription}
            rocketId={rocket.rocketId}
            rocketReservation={rocket.rocketReservation}
            handleBooking={handleBooking}
          />
        ))
      }
  </>
);

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketDescription: PropTypes.string,
    rocketReservation: PropTypes.bool,
  })).isRequired,
  handleBooking: PropTypes.func.isRequired,
};

export default RocketList;
