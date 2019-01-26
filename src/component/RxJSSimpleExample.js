import React from 'react';
import {interval, Observable} from 'rxjs';
import {updateObservable1, updateObservable2} from "../actions/RxJSSimpleExampleActions";

export class RxJSSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;

    // [START: Example 1] parent - child observable and subscription.
    const parentObservable$ = interval (1000);
    const parentSubscription = parentObservable$.subscribe(x => console.log('Parent: '+x));

    const childObservable$ = interval(2000);
    const childSubscription = childObservable$.subscribe(x => console.log('Child: '+x));

    parentSubscription.add(childSubscription);
    // [END: Example 1]


    setTimeout(() => {
      parentSubscription.unsubscribe();
    }, 5000);

    // [START: Example 2] Create Observer
    this.observable2$ = Observable.create((observer) => {
      observer.next(this.store.getState().rxJSSimpleExampleData);
      observer.next(this.store.getState().rxJSSimpleExampleData);
      observer.complete();
    });
    // [END: Example 2]
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    // [START: Example 2] Subscribe Observer
    this.observable2$.subscribe(
      (rxJSSimpleExampleData) => {
        rxJSSimpleExampleData.observable2 = rxJSSimpleExampleData.observable2 + 100;
        console.log('Simple observable and subscription: ' + rxJSSimpleExampleData.observable2);
      },
      err => {},
      () => console.log('REACHED TO END...')
    );
    // [END: Example 2]
  }

  handleUpdateObservable1 = () => {
    this.store.dispatch(updateObservable1());
  };

  handleUpdateObservable2 = () => {
    this.store.dispatch(updateObservable2());
  };

  render() {
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-4">
            Observable1: {this.store.getState().rxJSSimpleExampleData.observable1}
          </div>
          <div className="bx--col-xs-4">
            Observable2: {this.store.getState().rxJSSimpleExampleData.observable2}
          </div>
        </div>
      </div>
    );
  }
}