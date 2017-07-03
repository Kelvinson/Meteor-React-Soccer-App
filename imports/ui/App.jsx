import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List } from 'material-ui/List';
import Divider from 'material-ui/Divider';


import Player from "./Player";
import TeamList from './Team-list'
import TeamStats from './Team-stats'

export default class App extends Component {
  constructor(props){
    super(props);

    //setting up the state
    this.state = {players:[]};
  }

componentWillMount() {
  this.setState({players:[{
    _id: 1,
    name: "Wang Dong",
    ballManipulaition:4,
    kickingAbilities:4,
    passingAbilities:4,
    dualTackling:3,
    fieldCoverage:3,
    blockingAbilities:4,
    gameStrategy:4,
    playmakingRisks:4,
  },
  {
    _id: 2,
    name: "Speedy Gonz",
    ballManipulaition:4,
    kickingAbilities:4,
    passingAbilities:4,
    dualTackling:3,
    fieldCoverage:3,
    blockingAbilities:4,
    gameStrategy:4,
    playmakingRisks:4,
  },
  {
    _id: 3,
    name: "Tracey Good",
    ballManipulaition:4,
    kickingAbilities:4,
    passingAbilities:4,
    dualTackling:3,
    fieldCoverage:3,
    blockingAbilities:4,
    gameStrategy:4,
    playmakingRisks:4,
  }]});
}

  getPlayers() {
    return [
    ];
  }

  renderPlayers() {
    return this.state.players.map((player) => (
      <TeamList key={player._id} player={player}/>
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7" ><Player /></div>
            <div className="col s12 m5" >
              <h2>Team list</h2>
              <Divider/>
              <List>
                {this.renderPlayers()}
              </List>
              <Divider/>
            </div>
            <div className="col s12 m5" ><TeamStats /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
