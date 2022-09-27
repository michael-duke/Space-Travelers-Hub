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
    <section className="flex flex-col gap-6 px-14 py-8">
      <RocketList
        rockets={rockets}
      />
    </section>
  );
}

export default RocketsContainer;
