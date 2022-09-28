import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMissions, allMissions, allStatus, allMesssages, joinMission,
} from '../redux/missions/missionsSlice';
import Loading from './Loading';
import MissionList from './MissionList';

const MissionsContainer = () => {
  const missions = useSelector(allMissions);
  const status = useSelector(allStatus);
  const message = useSelector(allMesssages);
  const dispatch = useDispatch();

  const handleMissionJoin = (id) => {
    dispatch(joinMission(id));
  };

  useEffect(() => {
    setTimeout(() => {
      if (missions.length === 0) dispatch(getMissions());
    }, 1600);
  }, []);

  return (
    <>

      <>
        {status === 'loading' || status === 'idle' ? <Loading message={message} />
          : (
            <MissionList missions={missions} handleMissionJoin={handleMissionJoin} />

          )}
      </>
    </>
  );
};

export default MissionsContainer;
