import styled from "styled-components";

const Habits = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
`
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
const H1 = styled.h1`
    color:  #126BA5;
    font-size: 23px;
`
const Day = styled.div`
    margin-top: 15vh;
    margin-bottom: 3vh;
`
const Counter = styled.div`
    color: #bababa;
    font-size: 18px;
`
const Habit = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex; 
    justify-content : space-between ;
    align-items: center;
`
const CheckMark = styled.button`
    border:none;
    border-radius: 4px;
    height: 60px;
    width: 60px;
    margin-right: 10px ;
    background-color: #e5e5e5;
`
const Description = styled.div`
    margin-left: 10px;
    color: #666666;
`
const H2= styled.div`
    font-size: 20px;
`
const H3= styled.div`
    font-size: 13px;
`
const Menu = styled.div`
    position: fixed;    
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 12vh;
    background-color: #ffffff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
`
const HabitsButton = styled.div`
    color: #52B6FF;
    font-size: 18px;
    margin-left: 10px;
`
const HistoryButton = styled.div`
    color: #52B6FF;
    font-size: 18px;
    margin-right: 10px;
`
const TodayButton = styled.div`
    color: #FFFFFF;
    background-color:#52B6FF;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -30%;
`

export{Menu, H1,H2,H3,Habits,Habit,Day,Counter,CheckMark,Description,Trackit,TopBar, ImgUser, HabitsButton, HistoryButton, TodayButton}