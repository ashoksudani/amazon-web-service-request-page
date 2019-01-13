import ServicdeReuestStub from './stub-service-request';

const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

/* Uncomment this function to use function which is callinng actual service url */
/*
const fetchWebSserviceRequest = () => {
  const url = 'http://xyz';

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      return jsonData;
    });
};
*/

const fake_fetchWebSserviceRequest = () => {
  return delay(500).then(() => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Server is not available.');
    // }
    return ServicdeReuestStub;
  });
};

/* Uncomment this line to use function which is callinng actual service url */
// export { fetchWebSserviceRequest };

/* Comment this line to use function which is calling actual service url */
export { fake_fetchWebSserviceRequest as fetchWebSserviceRequest };
