import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRockets, allRockets, allStatus, allMessages, rocketBooking,
} from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';
import Loading from './Loading';

function RocketsContainer() {
  const rockets = useSelector(allRockets);
  const status = useSelector(allStatus);
  const message = useSelector(allMessages);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (rockets.length === 0) dispatch(getRockets());
    }, 1700);
  }, []);

  const handleBooking = (id) => {
    dispatch(rocketBooking(id));
  };

  return (
    <>
      {status === 'loading' || status === 'idle' ? <Loading message={message} />
        : (

          <section className="flex flex-col gap-6 px-14 pt-40 pb-10">
            <RocketList
              rockets={rockets}
              handleBooking={handleBooking}
            />
          </section>

        )}
    </>
  );
}

export default RocketsContainer;
