import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, allRockets } from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';

function RocketContainer() {
  const rockets = useSelector(allRockets);
  const dispatch = useDispatch();

  console.log(rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <>
      <RocketList />
    </>
  );
}

export default RocketContainer;
