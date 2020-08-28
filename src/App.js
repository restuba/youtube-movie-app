import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from './components/commons/Navbar';
import { Sidebar } from './components/commons/Sidebar';
import { Home } from './components/pages/Home';
import { Trending } from './components/pages/Trending';
import Subscription from './components/pages/Subscription';
import Error from './components/pages/Error';
import { Switch, Route } from "react-router-dom";

export const App = () => {
  const [keyword, setKeyword] = useState('john');

  const handleSearchChange = (valueBaru) => {
    setKeyword(valueBaru)
  }

  return(
        <>
          <Navbar onSearchChange={(valueBaru) => handleSearchChange(valueBaru)}/> 
          <Sidebar/> 
          <MainWrapper >
            <Switch>
              <Route exact path="/" render={() => (
                <Home data={keyword} />
              )}/>
              <Route exact path="/trending" component={Trending} />
              <Route exact path="/subscription" component={Subscription} />
              <Route component={Error} />
            </Switch>
          </MainWrapper>
        </>
  )
}

const MainWrapper = styled.div`
  padding: 70px 20px;
  height: 100vh;
  width: 100%;
  overflow: auto;
  width: 86%;
  float: left;
  box-sizing: border-box;
  overflow: scroll;
  @media only screen and (max-width: 880px){
      width: 89%;
  }
  @media only screen and (max-width: 720px){
      width: 100%;
  }
`;

