# ReactJS Learning

## 1. An intro to the reactjs world
  - The idea of reactjs
  - Declarative programming
  - Functional approach
  - Composition
  - JSX ([*here*](https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro))
    - JSX Elements
    - JSX Elements And Their Surroundings
    - Attribute in JSX
    - Nested JSX
    - JSX Outer Elements
    - Rendering JSX
    - ReactDOM.render()
    - Passing a variable to ReactDOM.render()
    - The Virtual DOM
  - Advanced JSX ([*here*](https://www.codecademy.com/courses/react-101/lessons/react-jsx-advanced))
    - class vs className
    - Self-Closing Tags
    - JavaScript in Your JSX in Your Javascript
    - Curly Braces in JSX { }
    - 20 Digits of Pi in JSX
    - Variables in JSX
    - Event Listeners in JSX
      - List of supported events can be found [*here*](https://reactjs.org/docs/events.html#supported-events)
    - JSX Conditionals
      - if / else
      - ternary
      - &&
    - map in JSX
    - Keys
    - React.createElement
      - Read more about React.createElement [*here*](https://reactjs.org/docs/react-api.html#react.createelement)
  - Reusable components

## 2. Create a component (intro)
  - Component Exercise / Tutorial ([*here*](https://www.codecademy.com/courses/react-101/lessons/your-first-react-component))
    - Import React
    - Import ReactDOM
    - Create a Component Class
    - Name a Component Class
    - Component Class Instructions
    - The Render Function
    - Create a Component Instance
    - Render a Component
  - Components and Advanced JSX ([*here*](https://www.codecademy.com/courses/react-101/lessons/react-components-advanced-jsx))
    - Use multiline JSX in a Component
    - User a variale attribute in a Component
    - Put Logic in a Rneder Function
    - Use a conditional in a Render Function
    - Use "this" in a Component
    - Use an Event Listener in a Component
  - createClass/extends
  - Rendering
  - Attach to the dom
  - Properties ([this.props](https://www.codecademy.com/courses/react-101/lessons/this-props)): Information that gets passed from one component to another is known as "props."
    - Access a component's props
    - pass *props* to a component
    - Render a component's props
    - Pass props from component to component
    - Render different UI based on props
    - Put an event handler in a Component class
    - Pass an envent handler as a prop
    - Receive an event handler as a prop
    - handleEvent, onEvent, and this.props.onEvent
    - this.props.children
    - defaultProps
    - A React component should use *props* to store information that can be changed, but can only be changed by a *different* component.
  - State management ([this.state](https://www.codecademy.com/courses/react-101/lessons/this-state))
    - Setting initial state
    - Access a Component's state
    - Update state with this.setState
    - Call this.setState from another function
    - this.setState automatically calls render
    - Components interacting reacap
    - A React component should use *state* to store information that the component itself can change.
  - Stateless Components from Stateful Components ([*here*](https://www.codecademy.com/courses/react-102/lessons/stateless-inherit-stateful-intro))
    - Stateless components inherit from Stateful components
    - Build a *stateful* component class
    - Build a *stateless* component class
    - Pass a component's state
    - Don't update props
      - A component should never update *this.props*.
      - A React component should use *props* to store information that can be changed, but can only be changed by a *different* component.
      - A React component should use *state* to store information that the component itself can change.
  - Child components update their parent's state [*here*](https://www.codecademy.com/courses/react-102/lessons/child-updates-parents-state)
    - Define an event handler
    - Pass the event handler
    - Receive the event handler
    - Automatic binding
  - Child components update their sibling's props ([*here*](https://www.codecademy.com/courses/react-102/lessons/child-updates-sibling)
    - One sibling to display, another to change
    - Pass the right props to the right siblings
    - Display information in a sibling component
    - Stateless components inherit from stateful component
  - Video player ([*project*](https://www.codecademy.com/courses/react-102/projects/video-player))

## 3. Advanced React
  - Style ([*here*](https://www.codecademy.com/courses/react-102/lessons/style))
    - Inline styles
    - Make a style object variable
    - Style name syntax
    - Style value syntax
    - Share styles across multiple components
  - Container Components from presentational components ([*here*](https://www.codecademy.com/courses/react-102/lessons/container-presentational-components))
    - Separate Container Components From Presentational Components: Explanation
    - Separate Container Components From Presentational Components: Apply
  - Stateless functional components ([*here*](https://www.codecademy.com/courses/react-102/lessons/stateless-functional-components))
    - Stateless functional components
    - Stateless functional components and props
  - Prop types ([*here*](https://www.codecademy.com/courses/react-102/lessons/proptypes))
    - Apply propTypes
    - Add properties to propTypes
    - PropTypes in stateless functional components
  - React forms ([*here*](https://www.codecademy.com/courses/react-102/lessons/react-forms))
    - Input onChange
    - Write an input event handler
    - Set the input's initial state
    - Update an input's value
    - Controlled vs Uncontrolled

## 4. Lifecycle Methods ([*here*](https://www.codecademy.com/courses/react-102/lessons/mounting-lifecycle-methods))
  - What's a lifecycle method
  - Mounting lifecycle methods
  - componentWillMount
  - render
  - componentDidMount
  - Updating / Unmounting lifecycle methods
  - [Component Lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
    <br/><img src="/documents/images/react-component-lifecycle.png?raw=true" alt="Component Lifecycle" height="480px"/>

## 5. Patterns
  - Stateful and Stateless programming patterns ([*here*](https://www.codecademy.com/courses/react-102/lessons/child-updates-sibling/exercises/stateless-inherit-stateful-recap?action=resume_content_item))
    - A stateful, parent component passes down a prop to a stateless, child component
    - A stateful, parent component passes down an event handler to a stateless, child component
    - A child component updates its parent's state, and the parent passes that state to a sibling component.
  - Dividing components into *presentational components* and *container components*
    - Separating presentational components from display (or container) components
  - [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005)

## 6. A better approach (redux)
  - Don't mess with state
  - Dummy components vs Smart components
  - Components as functions
  - Redux pattern
  - Refactoring to redux implementation

## 7. Tooling
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

## 6. A real world application
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
