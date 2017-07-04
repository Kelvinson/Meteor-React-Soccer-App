import React, { Component } from 'react';

export default class Edit extends Component {
    showTeamStats() {
      this.props.showTeamStats();
    }
    editPlayer(event) {
    event.preventDefault();

    let player = {
      _id: this.props.currentPlayer._id,
      name: this.refs.name.value,
      team: this.refs.team.value,
      ballManipulaition:  this.refs.ballManipulaition.value,
      kickingAbilities: this.refs.kickingAbilities.value,
      passingAbilities:this.refs.passingAbilities.value,
      dualTackling:this.refs.dualTackling.value,
      fieldCoverage:this.refs.fieldCoverage.value,
      blockingAbilities:this.refs.blockingAbilities.value,
      gameStrategy:this.refs.gameStrategy.value,
      playmakingRisks:this.refs.playmakingRisks.value,
      notes:this.refs.notes.value,
      createAt: new Date(),
      owner: Meteor.userId(),
    }

    Meteor.call('updatePlayer',player,(error)=> {
      if(error) {
        alert("Oups something went wrong:" + error.reason);
      } else {
        alert("player updated");
        this.showTeamStats();
      }
    });

  }

  render() {
    const currentPlayer = this.props.currentPlayer;

    return(
      // Note: in the return syntax, only one div child is allowed, any
      //other divs must in this only div but not below it or above it.
      // or react will complain with the error: "Adjacent JSX elements must
      //be wrapped in an enclosing tag.""
      // Thus you only need one div as the parent and the other divs as
      // its children.
      <div className="row">
        <form className="col s12" onSubmit={this.editPlayer.bind(this)}>
          <h3>Update the player</h3>
        {/* for name and Team */}
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer.team}/>
            </div>
          </div>
          {/* for ballManipulaition and kickingAbilities*/}
          <div className="row">
            <div className="input-field col s6">
              <h5>Ball Manipulation</h5>
              <select className="browser-default" ref="ballManipulaition" defaultValue={currentPlayer.ballManipulaition}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Pretty good</option>
                <option value="4">4 - Nearly Perfect</option>
                <option value="5">5 - Master level</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Kicking Abilities</h5>
              <select className="browser-default" ref="kickingAbilities" defaultValue={currentPlayer.kickingAbilities}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Pretty good</option>
                <option value="4">4 - Nearly Perfect</option>
                <option value="5">5 - Master level</option>
              </select>
            </div>
          </div>
          {/* for passingAbilities and dualTackling */}
          <div className="row">
            <div className="input-field col s6">
              <h5>Passing Abilities</h5>
              <select className="browser-default" ref="passingAbilities" defaultValue={currentPlayer.passingAbilities}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Pretty good</option>
                <option value="4">4 - Nearly Perfect</option>
                <option value="5">5 - Master level</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Dual Tackling</h5>
              <select className="browser-default" ref="dualTackling" defaultValue={currentPlayer.dualTackling}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Pretty good</option>
                <option value="4">4 - Nearly Perfect</option>
                <option value="5">5 - Master level</option>
              </select>
            </div>
          </div>
          {/* for fieldCoverage and blockingAbilities*/}
          <div className="row">
            <div className="input-field col s6">
              <h5>Field Coverage</h5>
              <select className="browser-default" ref="fieldCoverage" defaultValue={currentPlayer.fieldCoverage}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Pretty good</option>
                <option value="4">4 - Nearly Perfect</option>
                <option value="5">5 - Master level</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blocking Abilities</h5>
              <select className="browser-default" ref="blockingAbilities" defaultValue={currentPlayer.blockingAbilities}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Pretty good</option>
                <option value="4">4 - Nearly Perfect</option>
                <option value="5">5 - Master level</option>
              </select>
            </div>
          </div>
          {/* for gameStrategy and playmakingRisks */}
          <div className="row">
            <div className="input-field col s6">
              <h5>Game Strategy</h5>
              <select className="browser-default" ref="gameStrategy" defaultValue={currentPlayer.gameStrategy}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Pretty good</option>
                <option value="4">4 - Nearly Perfect</option>
                <option value="5">5 - Master level</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking Risks</h5>
              <select className="browser-default" ref="playmakingRisks" defaultValue={currentPlayer.playmakingRisks}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Pretty good</option>
                <option value="4">4 - Nearly Perfect</option>
                <option value="5">5 - Master level</option>
              </select>
            </div>
          </div>
          {/* for entering note info and the submit button */}
          <div className="row">
            <div className="input-field col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
            </div>
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}
