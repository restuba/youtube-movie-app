import React, {Component} from 'react';
import styled from 'styled-components';
import Navbar from './components/commons/Navbar';
import Sidebar from './components/commons/Sidebar';
import Home from './components/pages/Home';
import Trending from './components/pages/Trending';
import Subscription from './components/pages/Subscription';
import Error from './components/pages/Error';
import { Switch, Route } from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: "john"
    }
  }

  handleSearchChange(newValue){
    this.setState({
      value: newValue
  })
  }

  render(){
    return (
        <>
          <Navbar onSearchChange={(valueBaru) => this.handleSearchChange(valueBaru)}/>  
              <Sidebar />
              <MainWrapper >
                <Switch>
                  <Route exact path="/" render={() => (
                    <Home data={this.state.value} />
                  )}/>
                  <Route exact path="/trending" component={Trending} />
                  <Route exact path="/subscription" component={Subscription} />
                  <Route component={Error} />
                </Switch>
              </MainWrapper>
        </>
    )
  }
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

export default App;