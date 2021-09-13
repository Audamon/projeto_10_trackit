import {
    TopBar, Trackit, ImgUser, Menu, HabitsButton,
    HistoryButton, TodayButton, H1
} from "./HabitsStyle";
import { useContext, useState, useEffect } from "react";
import UserContext from "./Context/UserContent";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CreateHabits, ShowHabits } from "./Service";

export default function Habits() {
    const [listLength, setListLength] = useState(0)
    const { user, setUser } = useContext(UserContext)
    const [createState, setCreateState] = useState('none')
    const [weekdayBackground, setWeekdayBackground] = useState('#FFFFFF')
    const [weekdayColor, setWeekdayColor] = useState('#d5d5d5')
    const [body, setBody] = useState({});
    const [habitName, setHabitName] = useState('')
    const [habitId, setHabitId] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        const promise = ShowHabits(config);
        promise.then(res => {
            setListLength(res.data.length)
            setList(res.data)
        });

    }, []);


    function showCreation() {
        setCreateState('flex')
    }


    function writeHabit(e) {
        setHabitName(e.target.value)


    }
    function chooseDay(e) {
        setHabitId([...habitId, e.target.id])
        setBody({ ...body, name: habitName, days: habitId })
    }
    function send() {

        console.log(user.token)
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        const promise = CreateHabits(body, config)
        promise.then(res => console.log(res.data))
    }
    return (
        <Page>
            <TopBar>
                <Trackit>TrackIt</Trackit>
                <ImgUser src={user.image} />
            </TopBar>
            <Title>
                <H1>Meus hábitos</H1>
                <AddButton onClick={showCreation}>+</AddButton>
            </Title>
            <HabitsList>
                <CreateHabit display={createState}>
                    <InputHabit type='text' placeholder=' nome do hábito' required value={habitName} onChange={(e) => writeHabit(e)}></InputHabit>
                    <Weekdays >
                        <InputDays id={0} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>D</InputDays>
                        <InputDays id={1} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>S</InputDays>
                        <InputDays id={2} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>T</InputDays>
                        <InputDays id={3} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>Q</InputDays>
                        <InputDays id={4} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>Q</InputDays>
                        <InputDays id={5} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>S</InputDays>
                        <InputDays id={6} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>S</InputDays>
                    </Weekdays>
                    <Action >
                        <Cancel>Cancelar</Cancel>
                        <Save onClick={send}>Salvar</Save>
                    </Action>
                </CreateHabit>
                {listLength === 0 ? <>Você não tem nenhum hábito <br />cadastrado ainda. Adicione um hábito<br /> para começara trackear!</> :
                    list.map(item => <>
                        <CreateHabit display={'flex'}>
                            <InputHabit type='text' placeholder=' nome do hábito' required value={item.name} onChange={(e) => writeHabit(e)}></InputHabit>
                            <Weekdays >
                                <InputDays id={0} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>D</InputDays>
                                <InputDays id={1} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>S</InputDays>
                                <InputDays id={2} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>T</InputDays>
                                <InputDays id={3} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>Q</InputDays>
                                <InputDays id={4} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>Q</InputDays>
                                <InputDays id={5} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>S</InputDays>
                                <InputDays id={6} onClick={(e) => chooseDay(e)} backgroundColor={weekdayBackground} color={weekdayColor}>S</InputDays>
                            </Weekdays>
                        </CreateHabit>
                    </>)}
            </HabitsList>
            <Menu>
                <Link to='habitos'>
                    <HabitsButton>Hábitos</HabitsButton>
                </Link>
                <Link to='/hoje'>
                    <TodayButton>Hoje</TodayButton>
                </Link>
                <Link to='/historico'>
                    <HistoryButton>Histórico</HistoryButton>
                </Link>
            </Menu>
        </Page>
    );
}
const Page = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 0 10px;
    color: #666666;
    width: 100%;
    overflow-y: scroll;
`
const Title = styled.div`
    margin-top: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width:100% ;
    padding-left: 10px;
    margin-bottom: 10px;
`
const AddButton = styled.button`
    background-color: #52B6FF;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    width: 35px;
    height: 35px;
    font-size: 26px;
    margin-right: 10px;
`
const HabitsList = styled.div`
width: 100%;
`
const CreateHabit = styled.div`
    margin: 0 10px 15px 10px;
    width: 320px;
    border-radius: 3px;
    height: 150px;
    background-color: #ffffff;
    display: ${props => props.display};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InputHabit = styled.input`
    display: flex;
    width: 80%;
    border: 1px solid #d5d5d5;
    ::placeholder{
        color: #d5d5d5;
    }
    height: 30px;
    border-radius: 3px;  
`
const Weekdays = styled.div`
    margin-top: 10px;
    width: 80%;
    display: flex;
    justify-content: space-between;
`
const InputDays = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.backgroundColor};
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    color: ${props => props.color};
`
const Action = styled.div`
    width: 80%;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
   
`
const Save = styled.button`
    width: 65px;
    height: 25px;
    background-color: #52B6FF;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    margin-left: 10px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Cancel = styled.button`
    color: #52B6FF;
    background-color: #ffffff;
    border: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`