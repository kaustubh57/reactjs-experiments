import React from 'react';
import {interval, Observable} from 'rxjs';
import {updateObservable1, updateObservable2} from "../actions/RxJSSimpleExampleActions";

export class RxJSSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleUpdateObservable1 = () => {
    this.store.dispatch(updateObservable1());
  };

  handleUpdateObservable2 = () => {
    this.store.dispatch(updateObservable2());
  };

  render() {
    // [START: Example 1] parent - child observable and subscription.
    const parentObservable$ = interval (1000);
    const parentSubscription = parentObservable$.subscribe(x => console.log('Parent: '+x));

    const childObservable$ = interval(2000);
    const childSubscription = childObservable$.subscribe(x => console.log('Child: '+x));

    parentSubscription.add(childSubscription);
    // [END: Example 1]


    // [START: Example 2] Create Observer
    const observable2$ = Observable.create((observer) => {
      observer.next(100);
      observer.next(200);
      observer.complete();
    });
    observable2$.subscribe(
      value => console.log('Simple observable and subscription: '+value),
      err => {},
      () => console.log('REACHED TO END...')
    );
    // [END: Example 2]

    setTimeout(() => {
      parentSubscription.unsubscribe();
    }, 5000);

    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-4">
            Observable1: {this.store.getState().technologyVote.angular}
          </div>
          <div className="bx--col-xs-4">
            Observable2: {this.store.getState().technologyVote.react}
          </div>
        </div>
      </div>
    );
  }
}