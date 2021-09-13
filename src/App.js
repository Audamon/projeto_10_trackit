import styled from "styled-components";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UserContext from "./Context/UserContent";


import LoginPage from "./LoginPage";
import SignUpPage from "./assets/SignUpPage";
import { useState } from "react";
import Today from "./Today";

export default function App() {

  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{user, setUser}}>
      <AppBody>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true}>
              <LoginPage />
            </Route>
            <Route path='/cadastro'>
              <SignUpPage />
            </Route>
            <Route path='/hoje' exact={true}>
              <Today value={{user, setUser}}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </AppBody>
    </UserContext.Provider>
  );
}

const AppBody = styled.div`
  height: 100vh;
  box-sizing: padding-box;
  display: flex;
  justify-content: center;
  font-family: 'Lexend Deca', sans-serif;
  background-color: #e5e5e5;
  //font-family: 'Playball', cursive;
`
