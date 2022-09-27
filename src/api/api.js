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
      }) => {
        const rocketImage = rocketImages[0];
        return {
          rocketId,
          rocketName,
          rocketDescription,
          rocketImage,
          rocketReservation: false,
        };
      },
    );
    return rockets;
  },
};

export default api;
