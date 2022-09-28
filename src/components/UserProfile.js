import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-tailwind/react';
import { allMissions, joinMission } from '../redux/missions/missionsSlice';
import { allRockets, rocketBooking } from '../redux/rockets/rocketsSlice';

const UserProfile = () => {
  const dispatch = useDispatch();

  const missions = useSelector(allMissions);
  const rockets = useSelector(allRockets);

  const missionsJoined = missions.filter((mission) => mission.joined);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className=" py-20 flex sl:flex-col sl:justify-center sl:items-stretch min-h-screen items-center gap-8 mx-10 sm:mx-2">
      <div className="missions w-1/2 sm:w-2/3 sl:w-full text-left mt-8 max-h-96 overflow-y-scroll">
        <h2 className="text-2xl text-center">My Missions</h2>
        {missionsJoined.length === 0 ? (
          <>
            <span className="italic">No Missions Joined, yet</span>
            <span> 🎯😊. </span>
            <span className="italic">Click on Missions page to join.</span>
          </>
        ) : (
          missionsJoined.map(({ missionId: id, missionName, link }) => (
            <div
              key={id}
              className="border text-left p-5 flex items-center justify-between"
            >
              <h3>
                🎯
                {' '}
                {missionName}
                <span>
                  <a
                    className="underline block text-sm text-purple-800"
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Read more
                  </a>
                </span>
              </h3>
              <Button
                className="bg-gradient-to-r from-blue-500 to-blue-200 hover:shadow-none shadow-none border-2 hover:border-blue-400 hover:text-blue-400 hover:from-white hover:to-white"
                onClick={() => dispatch(joinMission(id))}
              >
                Leave
              </Button>
            </div>
          ))
        )}
      </div>
      <div className="rockets w-1/2 sm:w-2/3 sl:w-full text-left mt-8 max-h-96 overflow-y-scroll">
        <h2 className="text-2xl text-center">My Rockets</h2>
        {rocketsReserved.length === 0 ? (
          <>
            <span className="italic">No Rockets Reserved, yet</span>
            <span> 🚀😊. </span>
            <span className="italic">Click on Rockets page to reserve.</span>
          </>
        ) : (
          rocketsReserved.map(({ rocketId: id, rocketName, link }) => (
            <div
              key={id}
              className="border text-left p-5 flex items-center justify-between"
            >
              <h3>
                🚀
                {' '}
                {rocketName}
                <span>
                  <a
                    className="underline block text-sm text-purple-800"
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Read more
                  </a>
                </span>
              </h3>
              <Button
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                ripple={false}
                className="bg-gradient-to-r from-red-400 to-red-200 hover:shadow-none shadow-none border-2 hover:border-red-400 hover:text-red-400 hover:from-white hover:to-white"
                onClick={() => dispatch(rocketBooking(id))}
              >
                Cancel
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserProfile;
