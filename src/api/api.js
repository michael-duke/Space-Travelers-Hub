const baseURL = 'https://api.spacexdata.com/v3/';

const api = {
  fetchMissions: async () => {
    const response = await fetch(`${baseURL}missions`);
    const data = await response.json();
    const missions = data.map(
      ({
        mission_id: missionId,
        mission_name: missionName,
        description: desc,
      }) => ({
        missionId,
        missionName,
        desc,
      }),
    );
    return missions;
  },
  fetchRockets: async () => {
    const response = await fetch(`${baseURL}rockets`);
    const data = await response.json();
    const rockets = data.map(
      ({
        rocket_id: rocketId,
        rocket_name: rocketName,
        rocket_type: rocketType,
        flickr_images: rocketImages,
      }) => {
        const rocketImage = rocketImages[0];
        return {
          rocketId,
          rocketName,
          rocketType,
          rocketImage,
        };
      },
    );
    return rockets;
  },
  fetchDragons: async () => {
    const response = await fetch(`${baseURL}dragons`);
    const data = await response.json();
    const dragons = data.map(
      ({
        id,
        name,
        type,
        flickr_images: dragonImages,
      }) => {
        const dragonImage = dragonImages[0];
        return {
          id,
          name,
          type,
          dragonImage,
        };
      },
    );
    return dragons;
  },
};

export default api;
