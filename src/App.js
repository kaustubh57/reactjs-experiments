import React, { Component } from 'react';
import { Search20, ShoppingCart20 } from '@carbon/icons-react';
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
import { Button } from 'carbon-components-react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header aria-label="Austin Tacos">
                <SkipToContent />
                <HeaderMenuButton aria-label="Open Menu" />
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
                        <Search20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="Cart">
                        <ShoppingCart20 />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
            <Content id="main-content">
                Cart goes here.
                <br />
                <Button>React Carbon Component Button</Button>
            </Content>
        </div>
    );
  }
}

export default App;
