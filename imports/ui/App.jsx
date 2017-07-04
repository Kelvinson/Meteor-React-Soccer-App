import React, { PropTypes,Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {createContainer} from 'meteor/react-meteor-data';
import {Link} from 'react-router';

import {Players} from '../api/players';
import Player from "./Player";
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import AccountsWrapper from './AccountsWrapper';

let tempPlayer = {
  name: "Temp player",
  team: "Lynda",
  ballManipulaition:1,
  kickingAbilities:2,
  passingAbilities:4,
  dualTackling:2,
  fieldCoverage:3,
  blockingAbilities:2,
  gameStrategy:2,
  playmakingRisks:2,
  notes: "This is a temp player",
  createAt: new Date(),
  owner: Meteor.userId(),
}






export   class App extends Component {
  constructor(props){
    super(props);

    //setting up the state
    this.state = {currentPlayer: tempPlayer};
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

//Move componentWillMount because we want to load the static data
// from database other than componentWillMount() method;

// componentWillMount() {
//   .......
// }

// it is not returning this.state.players anymore for
// the state is now by returned by the createContainer() function
// at the end of the code;

  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer:player,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}>
          <AccountsWrapper/>
        </AppBar>
          <div className="row">
            <div className="col s12 m7" ><Player player={this.state.currentPlayer} /></div>
            <div className="col s12 m5" >
              <h2>Team list</h2><Link to="/new" className="waves-effect waves-light btn">Add player</Link>
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

App.propTypes = {
  players: PropTypes.array.isRequired,
};

export default createContainer(() => {
Meteor.subscribe("players");
const user = Meteor.userId();
  return {
    players: Players.find({}, {sort:{name:1}}).fetch(),
  };
},App);
