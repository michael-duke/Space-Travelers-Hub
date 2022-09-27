import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';

const Mission = ({
  id, missionName, desc, joined, handleJoin,
}) => (
  <tr className="border-b text-left odd:bg-blue-gray-100 sl:flex sl:flex-col">
    <td className="border-r sl:border-r-0 align-top py-4 pl-2">
      {missionName}
    </td>
    <td className="border-r sl:border-r-0 max-w-lg py-4 text-ellipsis p-2">
      {desc}
    </td>
    <td className="border-r sl:border-r-0 text-center p-2">
      <Button className={`uppercase text-sm bg-gray-500 p-1 rounded-none shadow-none hover:shadow-lg hover:shadow-gray-400 ${joined ? 'bg-green-400 hover:shadow-none capitalize' : ''}`}>
        {joined ? 'active member' : 'not a member' }
      </Button>
    </td>
    <td className="border-r sl:border-r-0 text-center p-2">
      <Button
        onClick={() => handleJoin(id)}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        ripple={false}
        variant="text"
        className={`capitalize text-sm bg-transparent border border-gray-500 text-gray-500 hover:bg-blue-gray-500 hover:text-white active:bg-blue-gray-700 p-2 rounded-none ${joined ? 'text-red-500 hover:bg-white hover:text-red-500 border-red-500 active:bg-gray-200' : ''}`}
      >
        {joined ? 'leave mission' : 'join mission' }
      </Button>
    </td>
  </tr>
);

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
  handleJoin: PropTypes.func.isRequired,
};

export default Mission;
