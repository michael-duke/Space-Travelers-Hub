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
        wikipedia: link,
      }) => ({
        missionId,
        missionName,
        desc,
        joined: false,
        link,
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
        description: rocketDescription,
        flickr_images: rocketImages,
        wikipedia: link,
      }) => {
        const rocketImage = rocketImages[Math.floor(Math.random() * rocketImages.length)];
        return {
          rocketId,
          rocketName,
          rocketDescription,
          rocketImage,
          reserved: false,
          link,
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
        const dragonImage = dragonImages[Math.floor(Math.random() * dragonImages.length)];
        return {
          id,
          name,
          type,
          dragonImage,
          reserved: false,
        };
      },
    );
    return dragons;
  },
};

export default api;
