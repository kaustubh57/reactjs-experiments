import React from 'react';
import {TechnologyVoting} from "./TechnologyVoting";
import {TechnologyVotingResults} from "./TechnologyVotingResults";

export class ReduxExample extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <div className="bx--row example-grid-row">
        <div className="bx--col-xs-3">
          Redux Technology Voting Example
        </div>
        <div className="bx--col-xs-9">
          <TechnologyVoting store={this.store}/>
          <TechnologyVotingResults store={this.store}/>
        </div>
      </div>
    );
  }
}