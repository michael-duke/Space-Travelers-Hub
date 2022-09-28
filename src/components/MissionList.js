import React from 'react';
import PropTypes from 'prop-types';
import Mission from './Mission';

const MissionList = ({ missions, handleMissionJoin }) => (
  <>
    <div className="flex mx-4 sm:mx-2 justify-center pt-40">
      <table className="border min-w-full">
        <thead className="border-b">
          <tr className="sl:flex text-left sl:flex-col">
            <th className="py-2 pl-2 border-r">Mission</th>
            <th className="py-2 pl-2 border-r">Description</th>
            <th className="py-2 pl-2 border-r">Status</th>
            <th className="py-2 pl-2 border-r text-white">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {missions.map(({
            missionId: id, missionName, desc, joined,
          }) => (
            <Mission
              key={id}
              id={id}
              missionName={missionName}
              desc={desc}
              handleJoin={handleMissionJoin}
              joined={joined}
            />
          ))}
        </tbody>
      </table>
    </div>
  </>
);

MissionList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      missionId: PropTypes.string,
      missionName: PropTypes.string,
      desc: PropTypes.string,
      joined: PropTypes.bool,
    }),
  ).isRequired,
  handleMissionJoin: PropTypes.func.isRequired,
};
export default MissionList;
