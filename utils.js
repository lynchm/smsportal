function GenerateAuthToken(){
    const url = 'https://rest.smsportal.com/v1/Authentication';
    const options = {method: 'GET', 
    headers: {
        Accept: 'application/json',
        Authorization: Basic + ''
    }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
} 