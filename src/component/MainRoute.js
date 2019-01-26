import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {SVGExample} from './SVGExample';
import {SVGExample2} from './SVGExample2';
import {RxJSSimpleExample} from "./RxJSSimpleExample";
import {CarbonComponentExample} from "./CarbonComponentExample";
import {ReduxExample} from "./ReduxExample";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export class MainRoute extends React.Component {

  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path='/carboncomponent'
            component={CarbonComponentExample}/>
          <Route
            exact
            path='/redux'
            render={
              (props) => <ReduxExample {...props} store={this.store} />
            } />
          <Route
            exact
            path='/svg1'
            component={SVGExample}/>
          <Route
            exact
            path='/svg2'
            component={SVGExample2}/>
          <Route
            exact
            path='/rxjs'
            render={
              (props) => <RxJSSimpleExample {...props} store={this.store} />
            } />
        </Switch>
      </main>
    )
  }
};