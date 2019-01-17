import React from 'react';
import { voteAngular, voteReact, voteVuejs } from "../actions";

export class TechnologyVoting extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  };

  render() {
    return (
      <div>
        <div className="bx--grid" style={{'textAlign': 'center'}}>
          <div className="bx--row">
            <div className="bx--col-xs-9">
              <img
                src="https://www.logolynx.com/images/logolynx/s_58/580cb30410b78c4c20dbc9166e49a228.jpeg"
                height="96"
                alt="CodingTheSmartWay.com"/>
              <h2>What is your favorite front-end development framework 2019?</h2>
              <h4>Click on the logos below to vote!</h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-xs-3">
              <img
                src="https://wishtackblog.files.wordpress.com/2017/03/angular.png"
                height="96"
                alt="Angular"
                onClick={this.handleVoteAngular}/>
            </div>
            <div className="bx--col-xs-3">
              <img
                src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent-768x768.png"
                height="96"
                alt="React"
                onClick={this.handleVoteReact}/>
            </div>
            <div className="bx--col-xs-3">
              <img
                src="https://vuejs.org/images/logo.png"
                height="96"
                alt="Vue.js"
                onClick={this.handleVoteVuejs}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}