import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, allMissions } from '../redux/missions/missionsSlice';
import MissionList from './MissionList';

const MissionsContainer = () => {
  const missions = useSelector(allMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, []);

  return (
    <>
      <MissionList missions={missions} />
    </>
  );
};

export default MissionsContainer;
