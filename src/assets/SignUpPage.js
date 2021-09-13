import styled from "styled-components";
import logo from '../assets/logo.png';
import { useState } from "react";
import Loader from "react-loader-spinner";
import { Link, useHistory } from "react-router-dom";
import { Registry } from "../Service";

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true);
    const [signUpState, setSignUpState] = useState(false);
    const history = useHistory();
    function registry() {
        setLoading(false)
        setSignUpState(false)
        const body = {
            email,
            name,
            image,
            password
        }
        Registry(body, setEmail, setName,setImage, setPassword, setLoading, setSignUpState)
        history.push('/')
    }

    return (
        <SignUpEntry>
            <IMG src={logo} alt='' />
            <Input type='text' placeholder="  email" value={email} onChange={e => setEmail(e.target.value)} disabled={signUpState} backGroundColor={loading === true ? '#ffffff' : '#f2f2f2'} color={loading === true ? '#dbdbdb' : '#fafafa'}></Input>
            <Input type='text' placeholder="  senha" value={password} onChange={e => setPassword(e.target.value)} disabled={signUpState} backGroundColor={loading === true ? '#ffffff' : '#f2f2f2'} color={loading === true ? '#dbdbdb' : '#fafafa'}></Input>
            <Input type='text' placeholder="  nome" value={name} onChange={e => setName(e.target.value)} disabled={signUpState} backGroundColor={loading === true ? '#ffffff' : '#f2f2f2'} color={loading === true ? '#dbdbdb' : '#fafafa'}></Input>
            <Input type='text' placeholder="  foto" value={image} onChange={e => setImage(e.target.value)} disabled={signUpState} backGroundColor={loading === true ? '#ffffff' : '#f2f2f2'} color={loading === true ? '#dbdbdb' : '#fafafa'}></Input>
            <SignUpButton onClick={registry} disabled={signUpState}>{loading === true ? <>Cadastrar</> : <Loader type="ThreeDots" color="#FFFFFF" height={35} width={80} />}</SignUpButton>
            <Link to='/'>
                <LoginLink>Já tem uma conta? Faça login!</LoginLink>
            </Link>
        </SignUpEntry>
    );
}
const SignUpEntry = styled.div`
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
const SignUpButton = styled.button`
    width: 100%;
    height: 35px;
    font-size: 20px;
    background-color: #52b6ff;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
`
const LoginLink = styled.div` 
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
    display: flex;
    justify-content: center;

`