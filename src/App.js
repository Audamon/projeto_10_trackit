import styled from "styled-components";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignUpPage from "./assets/SignUpPage";
export default function App() {
  return (
    <AppBody>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true}>
            <LoginPage/>
          </Route>
          <Route path='/cadastro'>
            <SignUpPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </AppBody>
  );
}

const AppBody = styled.div`
  box-sizing: padding-box;
  display: flex;
  justify-content: center;
  font-family: 'Lexend Deca', sans-serif;
  //font-family: 'Playball', cursive;
`
