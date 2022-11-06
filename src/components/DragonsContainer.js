import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDragons, allDragons, allStatus, allMessages, reserveDragon,
} from '../redux/dragons/dragonsSlice';
import DragonList from './DragonList';
import Loading from './Loading';

function DragonsContainer() {
  const dragons = useSelector(allDragons);
  const status = useSelector(allStatus);
  const message = useSelector(allMessages);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (dragons.length === 0) dispatch(getDragons());
    }, 1600);
  }, []);

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };
  return (
    <>
      {status === 'loading' || status === 'idle' ? <Loading message={message} />
        : (
          <DragonList dragons={dragons} handleReserve={handleReserve} />

        )}
    </>
  );
}

export default DragonsContainer;
