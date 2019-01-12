# ReactJS Learning

1. **An intro to the reactjs world**
  - The idea of reactjs
  - Declarative programming
  - Functional approach
  - Composition
  - JSX (https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro)
    - JSX Elements
    - JSX Elements And Their Surroundings
    - Attribute in JSX
    - Nested JSX
    - JSX Outer Elements
    - Rendering JSX
    - ReactDOM.render()
    - Passing a variable to ReactDOM.render()
    - The Virtual DOM
  - Advanced JSX (https://www.codecademy.com/courses/react-101/lessons/react-jsx-advanced)
    - class vs className
    - Self-Closing Tags
    - JavaScript in Your JSX in Your Javascript
    - Curly Braces in JSX { }
    - 20 Digits of Pi in JSX
    - Variables in JSX
    - Event Listeners in JSX
      - List of supported events can be found [https://reactjs.org/docs/events.html#supported-events](here)
    - JSX Conditionals
    - map in JSX
    - Keys
    - React.createElement
  - Reusable components

2. **Create a component (intro)**
  - createClass/extends
  - Rendering
  - Attach to the dom
  - Properties
  - State management
    - demo write a click counter
  - [Component Lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
    <br/><img src="/documents/images/react-component-lifecycle.png?raw=true" alt="Component Lifecycle" height="480px"/>

3. **A better approach (redux)**
  - Don't mess with state
  - Dummy components vs Smart components
  - Components as functions
  - Redux pattern
  - Refactoring to redux implementation
4. **Tooling**
  - Setup and tools
    - npm
    - web pack
      - basic configuration
      - babel
      - plugins
      - environment
    - scss
    - vendor vs app
    - dev vs prod
    - hot reload
  - Testing

5. **A real world application (branch master)**
  - A spotify client
    - Search for an artist
    - Show the artists
    - Show the albumns of that artist
    - Add the album to the basket
  - Routing
  - Testing

<hr>

## Virtual DOM (read [here](https://reactjs.org/docs/faq-internals.html))
  - What is the Virtual DOM?
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

![](/documents/images/virtual-DOM.png)

<hr>

## Redux Learning 
(https://www.lynda.com/React-js-tutorials/Learning-Redux/540345-2.html)
  - Based on FLUX design pattern (developed by Facebook)
  - Only single store (no dispatcher like flux)
  - Flux vs Redux pattern

| Flux             |  Redux |
:-------------------------:|:-------------------------:
![](/documents/images/flux-pattern.png)  |  ![](/documents/images/redux-pattern.png)

  - Redux Single state managed by functions  
    <img src="/documents/images/redux-single-state-managed-by-functions.png" alt="Redux Single state managed by functions" height="240px"/>

  - Functional Programming
    - Pure functions
    - Immutability
    - Composition
      <br/><img src="/documents/images/redux-compose.png" alt="Redux compose" height="160px"/>
      - Composition used in the store by reducer function (which are composed)
      - We don't have to worry about how these reducers are composed.
      - All we have to do is identify state, write good reducers, and let the Redux store handle the rest.
        <img src="/documents/images/redux-compose-reducer-store.png" alt="Redux compose reducer store" height="160px"/>
<hr>

### React APIs
  - React.createElement
  - ReactDOM.render

### React commands
  - npm install -g create-react-app

<hr>

### Next Video Tutorials for ReactJS:
- **DONE** [ReactJS Essential Training](https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/761961-2.html)
- [React Recipes](https://www.lynda.com/React-js-tutorials/React-Recipes/724807-2.html)
- [React Lifecycles](https://www.lynda.com/React-js-tutorials/React-Lifecycles/592509-2.html)
- [React: Components, Context, and Accessibility](https://www.lynda.com/Web-Development-tutorials/React-Components-Context-Accessibility/709848-2.html)
- [Learning Redux](https://www.lynda.com/React-js-tutorials/Learning-Redux/540345-2.html)

### Next read for ReactJS:
