import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, allMissions } from '../redux/missions/missionsSlice';
import MissionList from './MissionList';

const MissionsContainer = () => {
  const missions = useSelector(allMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <>
      <MissionList missions={missions} />
    </>
  );
};

export default MissionsContainer;
