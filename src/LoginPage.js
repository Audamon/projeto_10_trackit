import styled from "styled-components";
import logo from "./assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext,  } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Login } from './Service'
import UserContext from "./Context/UserContent";



export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [loginState, setLoginState] = useState(false)
    const {user, setUser}= useContext(UserContext);
    const history = useHistory();
    
    function mudar() {

        setLoading(0);
        setLoginState(true)
        const body = {email,
                      password
                     };
        const promise = Login(body, setLoading, setLoginState, setPassword, setEmail);
        
        promise.then(res=> {
            setUser({...user, id: res.data.id,
                              name: res.data.name,
                              image: res.data.image,
                              email: res.data.email,
                              password: res.data.password,
                              token: res.data.token})
            history.push('/hoje')
        })
        
    }
    return (

        <LoginEntry>
            <IMG src={logo} alt='' />
            <Input type="text" placeholder="  email" value={email} onChange={e => setEmail(e.target.value)} disabled={loginState} backGroundColor={loading === true ? '#ffffff' : '#f2f2f2'} color={loading === true ? '#dbdbdb' : '#fafafa'}></Input>
            <Input type="text" placeholder="  senha" value={password} onChange={e => setPassword(e.target.value)} disabled={loginState} backGroundColor={loading === true ? '#ffffff' : '#f2f2f2'} color={loading === true ? '#dbdbdb' : '#fafafa'}></Input>
            <LoginButton onClick={mudar}> {loading === true ? <>Entrar</> : <Loader type="ThreeDots" color="#FFFFFF" height={35} width={80} />}</LoginButton>
            <Link to='/cadastro'>
                <SignUpLink>Não tem uma conta? Cadastre-se!</SignUpLink>
            </Link>
        </LoginEntry>

    );
}

const LoginEntry = styled.div`
    display: flex;
    flex-direction: column;
`

const IMG = styled.img`
  margin: 60px 17vw  60px  15vw;
  width: 48vw;
  height: 27vh; 
`
const Input = styled.input`
    background-color:${props => props.backGroundColor};
    width: 98%;
    height: 35px;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    margin-bottom: 5px;
    border-radius: 5px;
    ::placeholder { 
        color: ${props => props.color};
    }
`
const LoginButton = styled.button`
    width: 100%;
    height: 35px;
    font-size: 20px;
    background-color: #52b6ff;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
`
const SignUpLink = styled.div` 
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
    display: flex;
    justify-content: center;

`
