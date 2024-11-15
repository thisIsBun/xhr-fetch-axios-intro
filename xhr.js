const getBtn = document.getElementById('xhr-get-btn');
const postBtn = document.getElementById('xhr-post-btn');

const sendXMLHttpRequest = (method, url, params) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (params) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
      // status code 400 is in success(like fetch), need dispatch to error
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Oops... something wrong');
    };

    xhr.send(JSON.stringify(params));
  });
};

const getData = () => {
  sendXMLHttpRequest('GET', 'https://reqres.in/api/users')
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

const sendData = () => {
  const params = {
    email: '123eve.holt@reqres.in',
    password: 'pistol',
  };
  sendXMLHttpRequest('POST', 'https://reqres.in/api/register', params)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
