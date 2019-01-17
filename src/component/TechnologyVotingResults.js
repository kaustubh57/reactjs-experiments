import React from 'react';

export class TechnologyVotingResults extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesAngularInPercent() {
    const angularTotal = this.store.getState().angular;
    if (angularTotal) {
      const reactTotal = this.store.getState().react;
      const vuejsTotal = this.store.getState().vuejs;
      return (angularTotal / (angularTotal + reactTotal + vuejsTotal)) * 100
    } else {
      return 0;
    }
  }

  votesReactInPercent() {
    const reactTotal = this.store.getState().react;
    if (reactTotal) {
      const angularTotal = this.store.getState().angular;
      const vuejsTotal = this.store.getState().vuejs;
      return (reactTotal / (angularTotal + reactTotal + vuejsTotal)) * 100
    } else {
      return 0;
    }
  }

  votesVuejsInPercent() {
    const vuejsTotal = this.store.getState().vuejs;
    if (vuejsTotal) {
      const angularTotal = this.store.getState().angular;
      const reactTotal = this.store.getState().react;
      return (vuejsTotal / (angularTotal + reactTotal + vuejsTotal)) * 100
    } else {
      return 0;
    }
  }

  votesAngularInPercentStyle() {
    return {width: this.votesAngularInPercent()+'%', height: 10, backgroundColor: 'red'}
  }

  votesReactInPercentStyle() {
    return {width: this.votesReactInPercent()+'%', height: 10, backgroundColor: 'blue'}
  }

  votesVuejsInPercentStyle() {
    return {width: this.votesVuejsInPercent()+'%', height: 10, backgroundColor: 'green'}
  }

  render() {
    return (
      <div style={{marginTop: 25}}>
        <div className="bx--grid" style={{'textAlign': 'center'}}>
          <div className="bx--row">
            <div className="bx--col-xs-3">
              <span className="bx--label">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
            </div>
            <div className="bx--col-xs-6">
              <div className="bx--progress bx--tag--cool-gray">
                <div
                  className="bx--progress-bar"
                  style={this.votesAngularInPercentStyle()}/>
              </div>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-xs-3">
              <span className="bx--label">React: {this.votesReactInPercent().toFixed(2) + '%'}</span>
            </div>
            <div className="bx--col-xs-6">
              <div className="bx--progress bx--tag--cool-gray">
                <div
                  className="bx--progress-bar"
                  style={this.votesReactInPercentStyle()}/>
              </div>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-xs-3">
              <span className="bx--label">Vuejs: {this.votesVuejsInPercent().toFixed(2) + '%'}</span>
            </div>
            <div className="bx--col-xs-6">
              <div className="bx--progress bx--tag--cool-gray">
                <div
                  className="bx--progress-bar"
                  style={this.votesVuejsInPercentStyle()}/>
              </div>
            </div>
          </div>
        </div>

        <div className="bx--grid" style={{'textAlign': 'center'}}>
          <div className="bx--row">
            <div className="bx--col-xs-9">
              Results
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-xs-9">
              Angular: {this.store.getState().angular}
              <br/>
              React: {this.store.getState().react}
              <br/>
              Vuejs: {this.store.getState().vuejs}
            </div>
          </div>
        </div>
      </div>
    );
  }
}