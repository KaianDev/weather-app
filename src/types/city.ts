export type City = {
  name: string;
  sys: {
    country: string;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    humidity: number;
  };

  wind: {
    speed: number;
  };
};
