import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, allRockets } from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';

const RocketContainer = () => {
  const rockets = useSelector(allRockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <>
      { rockets.map((rocket) => (
        <RocketList
          key={rocket.rocketId}
          rocketImage={rocket.rocketImage}
          rocketName={rocket.rocketName}
          rocketDescription={rocket.rocketDescription}
        />
      )) }
    </>
  );
};

export default RocketContainer;
