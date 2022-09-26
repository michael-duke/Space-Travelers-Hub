import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, allRockets } from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';

function RocketsContainer() {
  const rockets = useSelector(allRockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) dispatch(getRockets());
  }, []);

  return (
    <>
      <RocketList />
    </>
  );
}

export default RocketsContainer;
