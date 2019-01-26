import React from 'react';
import {Button} from 'carbon-components-react';

export class CarbonComponentExample extends React.Component {
  render() {
    return (
      <div className="bx--row example-grid-row">
        <div className="bx--col-xs-3">
          React Component Examples
        </div>
        <div className="bx--col-xs-9">
          <Button>React Carbon Component Button</Button>
        </div>
      </div>
    );
  }
}