const getFetchBtn = document.getElementById('fetch-get-btn');
const postFetchBtn = document.getElementById('fetch-post-btn');

const sendFetchRequest = (method, url, params) => {
  return fetch(url, {
    method,
    body: JSON.stringify(params),
    headers: params ? { 'content-type': 'application/json' } : {},
  }).then((data) => {
    if (data.status >= 400) {
      throw new Error('Oops... something wrong');
    }
    return data.json();
  });
};

const getFetchData = () => {
  sendFetchRequest('GET', 'https://reqres.in/api/users')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

const postFetchData = () => {
  const params = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  };

  sendFetchRequest('POST', 'https://reqres.in/api/register', params)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

getFetchBtn.addEventListener('click', getFetchData);
postFetchBtn.addEventListener('click', postFetchData);
