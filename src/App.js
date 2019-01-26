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
import './App.css';
import {MainRoute} from "./component/MainRoute";

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
          <HeaderName href="#" prefix="ReactJS">
            Experiments
          </HeaderName>
          <HeaderNavigation aria-label="ReactJS Experiments">
            <HeaderMenuItem href="carboncomponent">Carbon Components</HeaderMenuItem>
            <HeaderMenuItem href="redux">Redux</HeaderMenuItem>
            <HeaderMenuItem href="svg1">SVG - 1</HeaderMenuItem>
            <HeaderMenuItem href="svg2">SVG - 2</HeaderMenuItem>
            <HeaderMenuItem href="rxjs">RxJS example</HeaderMenuItem>
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
            <MainRoute store={this.store}/>
          </div>
        </Content>
      </div>
    );
  }
}

export default App;
