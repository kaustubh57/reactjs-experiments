import React, {Component} from 'react';
import {Search20, ShoppingCart20} from '@carbon/icons-react';
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import {Button} from 'carbon-components-react';
import './App.css';
import {TechnologyVoting} from "./component/TechnologyVoting";
import {TechnologyVotingResults} from "./component/TechnologyVotingResults";
import {RxJSSimpleExample} from "./component/RxJSSimpleExample";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <div>
        <Header aria-label="Austin Tacos">
          <SkipToContent/>
          <HeaderMenuButton aria-label="Open Menu"/>
          <HeaderName href="#" prefix="Austin">
            Tacos
          </HeaderName>
          <HeaderNavigation aria-label="Austin Tacos">
            <HeaderMenuItem href="#">Locations</HeaderMenuItem>
            <HeaderMenuItem href="#">Menu</HeaderMenuItem>
            <HeaderMenuItem href="#">Shop</HeaderMenuItem>
            <HeaderMenuItem href="#">Our Story</HeaderMenuItem>
            <HeaderMenuItem href="#">News</HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
              <Search20/>
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Cart">
              <ShoppingCart20/>
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <Content id="main-content">
          <div className="bx--grid border" style={{'textAlign': 'center'}}>
            <div className="bx--row example-grid-row">
              <div className="bx--col-xs-3">
                React Component Examples
              </div>
              <div className="bx--col-xs-9">
                <Button>React Carbon Component Button</Button>
              </div>
            </div>
            <div className="bx--row example-grid-row">
              <div className="bx--col-xs-3">
                Redux Technology Voting Example
              </div>
              <div className="bx--col-xs-9">
                <TechnologyVoting store={this.store}/>
                <TechnologyVotingResults store={this.store}/>
              </div>
            </div>
            <div className="bx--row example-grid-row">
              <div className="bx--col-xs-3">
                RxJS Example
              </div>
              <div className="bx--col-xs-9">
                <RxJSSimpleExample store={this.store}/>
              </div>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default App;
