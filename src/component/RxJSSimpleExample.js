import React from 'react';
import {interval, Observable} from 'rxjs';

export class RxJSSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

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

    return <h1>RxJS Example</h1>;
  }
}