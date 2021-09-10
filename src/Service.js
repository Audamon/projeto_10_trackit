import axios from "axios";

const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'


function Login(body, setT, setLoginState, setPassword, setEmail){
    console.log(body)
    const promise = axios.post(URL+'auth/login', body )
    //promise.catch(console.error);
    if(promise.catch()){
        alert("Dados invalidos!");
        setT(1)
        setLoginState(false)
        setEmail("");
        setPassword("")
    }
    promise.then(res =>console.log(res.data))
    

}

export {Login};