const getAxiosBtn = document.getElementById('axios-get-btn');
const postAxiosBtn = document.getElementById('axios-post-btn');

const getAxiosData = () => {
  axios
    .get('https://reqres.in/api/users')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const postAxiosData = () => {
  const params = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  };
  axios
    .post('https://reqres.in/api/register', params)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
};

getAxiosBtn.addEventListener('click', getAxiosData);
postAxiosBtn.addEventListener('click', postAxiosData);
