import axios from "axios";

const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'


function Login(body, setLoading, setLoginState, setPassword, setEmail) {
    //console.log(body)
    const promise = axios.post(URL + 'auth/login', body)
    //promise.catch(err => console.log(err.response.status));
    promise.catch(err => {
        alert("Dados invalidos!");
        setLoading(true)
        setLoginState(false)
        setEmail("");
        setPassword("")
    });
    return promise

}

function Registry(body, setEmail, setName, setImage, setPassword, setLoading, setSignUpState) {
    const promise = axios.post(URL + 'auth/sign-up', body)
    promise.catch(err=> {
        alert('dados invalidos');
        setPassword('');
        setImage('');
        setName('');
        setEmail('');
        setLoading(true);
        setSignUpState(false);
    });
    promise.then(res => console.log(res));
    
}

export { Login, Registry };