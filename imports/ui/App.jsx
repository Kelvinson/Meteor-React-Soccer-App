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
import Edit from './EditPlayer';

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
    this.state = {
      currentPlayer: tempPlayer,
      showEditPlayer:false,
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);
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

  showEditForm() {
    this.setState({
      showEditPlayer: true,
    });
  }

  showTeamStats() {
    this.setState({
      showEditPlayer: false,
    });
  }

  showForm() {
    if(this.state.showEditPlayer == true) {
      return (<Edit currentPlayer={this.state.currentPlayer}
        showTeamStats = {this.showTeamStats}/>);
      } else {
        return (<TeamStats players={this.props.players} />);
      }
    }
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
            style={{backgroundColor:'#0277BD'}}>
          <AccountsWrapper/>
        </AppBar>
          <div className="row">
            <div className="col s12 m7" ><Player player={this.state.currentPlayer} showEditForm={this.showEditForm}/></div>
            <div className="col s12 m5" >
              <h2>Team list</h2><Link to="/new" className="waves-effect waves-light light-blue darken-3 btn">Add player</Link>
              <Divider/>
              <List>
                {this.renderPlayers()}
              </List>
              <Divider/>
            </div>

          </div>
          <div className="row">
            <div className="col s12">
            <br/>
              <Divider/>
              {this.showForm()}
              <Divider/>
            </div>
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
