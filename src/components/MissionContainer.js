import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, allMissions } from '../redux/missions/missionsSlice';
import MissionList from './MissionList';

const MissionContainer = () => {
  const missions = useSelector(allMissions);
  const dispatch = useDispatch();

  console.log(missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <>
      <MissionList />
    </>
  );
};

export default MissionContainer;
