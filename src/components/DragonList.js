import React from 'react';
import PropTypes from 'prop-types';
import Dragon from './Dragon';

const DragonList = ({ dragons, handleReserve }) => (
  <div className="mt-28">
    {
        dragons.map(({
          id, name, type, dragonImage, reserved,
        }) => (
          <Dragon
            key={id}
            dragonImage={dragonImage}
            dragonName={name}
            dragonId={id}
            dragonType={type}
            reserved={reserved}
            handleReserve={handleReserve}
          />
        ))
      }
  </div>
);

DragonList.propTypes = {
  dragons: PropTypes.arrayOf(PropTypes.shape({
    dragonId: PropTypes.string,
    dragonName: PropTypes.string,
    dragonType: PropTypes.string,
    dragonImage: PropTypes.string,
  })).isRequired,
  handleReserve: PropTypes.func.isRequired,
};

export default DragonList;
