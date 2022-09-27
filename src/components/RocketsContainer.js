import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, allRockets, allStatus } from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';
import RocketLoading from './RocketLoading';

function RocketsContainer() {
  const rockets = useSelector(allRockets);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (rockets.length === 0) dispatch(getRockets());
    }, 2300);
  }, []);

  return (
    <>
      {status === 'loading' || status === 'idle' ? <RocketLoading />
        : (

          <section className="flex flex-col gap-6 px-14 pt-40 pb-10">
            <RocketList
              rockets={rockets}
            />
          </section>

        )}
    </>
  );
}

export default RocketsContainer;
