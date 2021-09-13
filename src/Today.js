import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./Context/UserContent";
import { CheckmarkSharp } from 'react-ionicons'
import {Menu, H1,H2,H3,Habits,Habit,Day,Counter,CheckMark,Description,Trackit,TopBar,
         ImgUser, HabitsButton, HistoryButton, TodayButton} from './TodayStyle'

export default function Today() {

    const { user, setUser } = useContext(UserContext)
    console.log(user);
    return (
        <Habits>
            <TopBar>
                <Trackit>TrackIt</Trackit>
                <ImgUser src={user.image} />
            </TopBar>
            <Day>
                <H1>Segunda, 17/05</H1>
                <Counter>Nenhum hábito concluído ainda</Counter>
            </Day>
            <Habit>
                <Description>
                    <H2>Ler 1 capítulo de livro</H2>
                    <H3>Sequência atual: 3 dias <br /> Seu recorde: 5 dias</H3>
                </Description>
                <CheckMark>
                    <CheckmarkSharp
                        color={'#ffffff'}
                        height="40px"
                        width="40px"
                    />
                </CheckMark>
            </Habit>
            <Menu>
                <HabitsButton>Hábitos</HabitsButton>
                <TodayButton>Hoje</TodayButton>
                <HistoryButton>Histórico</HistoryButton>

            </Menu>
        </Habits>
    );
}

