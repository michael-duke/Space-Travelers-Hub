import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, allMissions, joinMission } from '../redux/missions/missionsSlice';
import MissionList from './MissionList';

const MissionsContainer = () => {
  const missions = useSelector(allMissions);
  const dispatch = useDispatch();

  const handleMissionJoin = (id) => {
    dispatch(joinMission(id));
  };

  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, []);

  return (
    <>
      <MissionList missions={missions} handleMissionJoin={handleMissionJoin} />
    </>
  );
};

export default MissionsContainer;
