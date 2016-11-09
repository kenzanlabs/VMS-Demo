
const config = {
  resorts: {
    vail: {
      title: 'Vail Mountain Resort',
      uref: '7d6ad4a4-d504-46b6-95c8-4e497f4920e8'
    },
    whistler: {
      title: 'Whistler Blackcomb',
      uref: '666cda7b-659b-476a-9812-1f37086baa77'
    },
    hintertux: {
      title: 'Hintertux Glacier',
      uref: 'd53b51d2-3044-4709-af36-f2baa4d72a57'
    }
  },
  baseUrl: 'http://www.myweather2.com'
};

config.selectedResort = config.resorts.vail;
config.path = '/developer/weather.ashx?uac=w2hRC83zXn&output=json&uref=' + config.selectedResort.uref;

module.exports = config;
