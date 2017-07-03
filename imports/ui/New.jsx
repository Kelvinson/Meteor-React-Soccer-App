import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Players } from '../api/players';

export default class Example extends Component {
  submitPlayer(event) {
    event.preventDefault();

    Players.insert({
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
    });
    console.log("Success player submitted!");
    browserHistory.push('/');
  }

  render() {
    return(
      // Note: in the return syntax, only one div child is allowed, any
      //other divs must in this only div but not below it or above it.
      // or react will complain with the error: "Adjacent JSX elements must
      //be wrapped in an enclosing tag.""
      // Thus you only need one div as the parent and the other divs as
      // its children.
      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <h3>Add a new player</h3>
        {/* for name and Team */}
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate"/>
            </div>
          </div>
          {/* for ballManipulaition and kickingAbilities*/}
          <div className="row">
            <div className="input-field col s6">
              <h5>Ball Manipulation</h5>
              <select className="browser-default" ref="ballManipulaition">
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
              <select className="browser-default" ref="kickingAbilities">
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
              <select className="browser-default" ref="passingAbilities">
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
              <select className="browser-default" ref="dualTackling">
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
              <select className="browser-default" ref="fieldCoverage">
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
              <select className="browser-default" ref="blockingAbilities">
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
              <select className="browser-default" ref="gameStrategy">
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
              <select className="browser-default" ref="playmakingRisks">
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
