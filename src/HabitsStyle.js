import styled from "styled-components";


const TopBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 12vh;
    background-color:  #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Trackit = styled.div`
    font-family: 'Playball', cursive;
    font-size: 38px;
    color: #ffffff;
    margin-left: 10px;
`
const ImgUser = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 10px;
`
const Menu = styled.div`
    position: fixed;    
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12vh;
    background-color: #ffffff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
    }
`
const HabitsButton = styled.div`
    color: #52B6FF;
    font-size: 18px;
    margin-left: 20px;
    
`
const HistoryButton = styled.div`
    color: #52B6FF;
    font-size: 18px;
    margin-right: 20px;
`
const TodayButton = styled.div`
    color: #FFFFFF;
    background-color:#52B6FF;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    left: 38%;
    bottom: 4%;
`
const H1 = styled.h1`
    color:  #126BA5;
    font-size: 23px;
    
`

export {TopBar, Trackit, ImgUser, Menu, HabitsButton, HistoryButton, TodayButton, H1}