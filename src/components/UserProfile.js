import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-tailwind/react';
import { allMissions, joinMission } from '../redux/missions/missionsSlice';
import { allRockets, rocketBooking } from '../redux/rockets/rocketsSlice';

const UserProfile = () => {
  const dispatch = useDispatch();

  const missions = useSelector(allMissions);
  const rockets = useSelector(allRockets);

  const missionsJoined = missions.filter((mission) => mission.joined);
  const rocketsReserved = rockets.filter((rocket) => rocket.rocketReservation);

  const handleMissionJoin = (id) => {
    dispatch(joinMission(id));
  };

  const handleBooking = (id) => {
    dispatch(rocketBooking(id));
  };

  return (
    <div className="flex min-h-screen items-center gap-8 mx-10">
      <div className="missions w-1/2 text-left">
        <h2 className="text-2xl">My Missions</h2>
        {missionsJoined.length === 0
          ? (
            <>
              <span className="italic">No Missions Joined, yet</span>
              <span> 🎯😊. </span>
              <span className="italic">Click on Missions page to join.</span>
            </>
          )
          : missionsJoined.map(({ missionId: id, missionName }) => (
            <div key={id} className="border text-left p-5 flex items-center justify-between">
              {missionName}
              <Button onClick={() => handleMissionJoin(id)}>
                Leave
              </Button>
            </div>
          ))}
      </div>
      <div className="rockets w-1/2 text-left">
        <h2 className="text-2xl">My Rockets</h2>
        {rocketsReserved.length === 0
          ? (
            <>
              <span className="italic">No Rockets Reserved, yet</span>
              <span> 🚀😊. </span>
              <span className="italic">Click on Rockets page to reserve.</span>
            </>
          )
          : rocketsReserved.map(({ rocketId: id, rocketName }) => (
            <div key={id} className="border text-left p-5 flex items-center justify-between">
              { rocketName }
              <Button onClick={() => handleBooking(id)}>
                Cancel
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default UserProfile;
