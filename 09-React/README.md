id: 09-react
summary: React introduction
categories: react
status: Published
authors: Hakam Abdelqader
Feedback Link: mailto:hakam.abdelqader@ibm.com

# React

React is a JavaScript library, so it assumes you have a basic understanding of the JavaScript language.

## Introduction
- Learn about React basics:
- Rendering
- Stateless components
- Stateful components
- Styling components
- The folder architecture

<!-- ------------------------ -->
## Before you get started

### Getting started

To be able to get started easily, look into the [Create React App](https://github.com/facebookincubator/create-react-app). It is a zero configuration command-line tool to rapidly bootstrap React projects. By using this you won't need to go through webpack configuration and you will be able to code right away.

### Installation

Run the following commands to get started:

```sh
npx create-react-app code
```
```sh
cd code
```
```sh
npm start
```

This will runs the app in the development mode, and live-reload as you make changes.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Folder Structure

After creation, your project should something look like this:

```
code

├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│ └── favicon.ico
│ └── index.html
│ └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

Real world applications can have any number of components, ranging from a handful to thousands. Having all of them in a single file is impractical, so we encourage you to structure them into modules / folders.

This allows you to keep your applications well structured and easy to work with. You can create a `components` folder under `/src` and create a folder for each component, where you will be able to colocate the CSS styles and any other resources the component may require.

For the project to build, **these files must exist with exact filenames**:

-   `public/index.html` is the page template;
    

-   `src/index.js` is the JavaScript entry point.
    

You can delete or rename the other files.

<!-- ------------------------ -->
## Go further

#### List of Available Scripts

In the project directory, you can run:


`npm start`[](https://shopify-1.gitbook.io/react/getting-started/before-you-get-started#npm-start)

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.


`npm test`

`npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

`npm run eject`

**Note: this is a one-way operation. Once you** `eject`**, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<!-- ------------------------ -->
## Methods

### Importing React

In order to use React, we must first import the React library. When we import the library, it creates an object that contains properties needed to make React work, including JSX and creating custom components.

```js
import React from 'react';
```

### React Components

A React component is a reusable piece of code used to define the appearance, behavior, and state of a portion of a web app’s interface. Components are defined as functions or as classes. Using the component as a factory, an infinite number of component instances can be created.

```js
import React from 'react';

function MyFunctionComponent() {
  return <h1>Hello from a function component!</h1>;
}

class MyClassComponent extends React.Component {
  render() {
    return <h1>Hello from a class component!</h1>;
  }
}
```

### React Component Base Class

React class components need to inherit from the `React.Component` base class and have a `render()` method. Other than that, they follow regular JavaScript class syntax.

This example shows a simple React class component.

```js
class MyComponent extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}
```

React class components must have a `render()` method. This method should return some React elements created with JSX.

To define a class component, you use the syntax class MyComponent extends Component. “Extending” the Component class provided by React is what makes the class a React Component, rather than just a plain JavaScript class.

You also have to define a `render` method inside the class, which will be used by React to actually render the component. 

### What is a functional component?

What about functional components? Well, you just have to define a function with a name beginning by an uppercase letter and React will know it’s a function component!

As to how to define the function, you have the choices JavaScript gives you. So you can define it using the function keyword:

```js
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```

But you can also use an arrow function if you want!

```js
const MyComponent = (props) =>; {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

```

One specificity of functional components is that you’re using hooks to manage things from state, to lifecycle, to references, and more.



### JSX Capitalization

React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it’s a component instance; if not, then it’s an HTML element.

```js
// This is considered a component by React.
<ThisComponent />
  
// This is considered a JSX HTML tag. 
<div>
```

### `ReactDOM.render()`

`ReactDOM.render()`‘s first argument is a component instance. It will render that component instance.

In this example, we will render an instance of `MyComponent`.

```js
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

// We won't write this line it will be handled by our app structure
ReactDOM.render(<MyComponent />, document.getElementById('app'));
```


### Code in `render()`

A React component can contain JavaScript before any JSX is returned. The JavaScript before the `return` statement informs any logic necessary to render the component.

In the example code, we see JavaScript prior to the `return` statement which rounds the `value` to an integer.

```js
class Integer extends React.Component {
  render() {
    const value = 3.14;
    const asInteger = Math.round(value);
    return <p>{asInteger}</p>;
  }
}
```

### Object Properties As Attribute Values

In React, JSX attribute values can be set through data stored in regular JavaScript objects. Look at the example block of code.


```js
const employee = {
  name:
    'Hakam',
  age: 30,
  address: 'Dubai',
};

class EmployeeProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>{employee.name}</p>
        <p>{employee.age}</p>
        <p>{employee.address}</p>
      </div>
    );
  }
}
```

<!-- ------------------------ -->
## Props 

React class components can access their props with the `this.props` object.

In the example code below, we see the `<Hello>` component being rendered with a `firstName` prop. It is accessed in the component’s `render()` method with `this.props.firstName`.

This should render the text “Hi there, Hakam!”

#### Class component
```js
class Hello extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}
```

#### Function component

```js
const Hello = (props) =>; {
  return (
    <h1>Hi there, {this.props.firstName}!</h1>
  );
}

// To use the component
<Hello firstName="Hakam" />
```

### Default props

A React component’s defaultProps object contains default values to be used in case props are not passed. If a prop is not passed to a component, then it will be replaced with the value in the defaultProps object.

In the example code, defaultProps is set so that profiles have a fallback profile picture if none is set. The <MyFriends> component should render two profiles: one with a set profile picture and one with the fallback profile picture.

```js

class Profile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.profilePictureSrc} alt="" />
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

Profile.defaultProps = {
  profilePictureSrc: 'https://example.com/no-profile-picture.jpg',
};

class MyFriends extends React.Component {
  render() {
    return (
      <div>
        <h1>My friends</h1>
        <Profile
          name="Jane Doe"
          profilePictureSrc="https://example.com/jane-doe.jpg"
        />
        <Profile name="John Smith" />
      </div>
    );
  }
}
```


### `this.props.children`

Every component’s props object has a property named children. Using this.props.children will return everything in between a component’s opening and closing JSX tags.

```js
<List>  // opening tag
  <li></li> // child 1
  <li></li> // child 2
  <li></li> // child 3
</List> // closing tag
```

### Another example 

React component receives props. As we mentioned already there is no any strict rule about what these props are. We may even pass other components.

```js
const Title = function () {
  return <h1>Hello there!</h1>;
}
const Header = function ({ title, children }) {
  return (
    <header>
      { title }
      { children }
    </header>
  );
}
function App() {
  return (
    <Header title={ <Title /> }>
      <Navigation />
    </Header>
  );
};
```

<!-- ------------------------ -->
## States 

### Rendering initial state:

```js
import React, { useState } from 'react';

export default function Funktion() {
  const initialState = {
    count: 0,
  };
  const [state] = useState(initialState);
  return <button>{state.count}</button>;
}
```

### Updating state:

```js
import React, { useState } from 'react';

export default function Funktion() {
  const initialState = {
    count: 0,
  };
  const [state, setState] = useState(initialState);
  function handleClick() {
    setState({
      count: state.count + 1,
    });
  }
  return <button onClick={handleClick}>{state.count}</button>;
}
```

There can be multiple `useState` hooks in a function.

The initial state passed to `useState` doesn’t have to be an object:

```js
import React, { useState } from 'react';

export default function Funktion() {
  const initialCount = {
    count: 0,
  };
  const [count, setCount] = useState(initialCount);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>{count}</button>;
}
```

<!-- ------------------------ -->
## Hooks 

### Function Components

In React, you can use a function as a component instead of a class. Function components receive `props` as a parameter.

In the example code, we show two equivalent components: one as a class and one as a function.

```js
// The two components below are equivalent.
class GreeterAsClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

function GreeterAsFunction(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### Why Hooks?

Hooks are functions that let us “hook into” state and lifecycle functionality in function components.

Hooks allow us to:

-   reuse stateful logic between components
-   simplify and organize our code to separate concerns, rather allowing unrelated data to get tangled up together
-   avoid confusion around the behavior of the `this` keyword
-   avoid class constructors, binding methods, and related advanced JavaScript techniques

### Rules for Using Hooks

There are two main rules to keep in mind when using Hooks:

1.  Only call Hooks from React function components.
2.  Only call Hooks at the top level, to be sure that Hooks are called in the same order each time a component renders.

Common mistakes to avoid are calling Hooks inside of loops, conditions, or nested functions.

```js
// Instead of confusing React with code like this:
if (userName !== '') {
 useEffect(() => {
   localStorage.setItem('savedUserName', userName);
 });
}

// We can accomplish the same goal, while consistently calling our Hook every time:
useEffect(() => {
 if (userName !== '') {
   localStorage.setItem('savedUserName', userName);
 }
});
```

### The State Hook

The `useState()` Hook lets you add React state to function components. It should be called at the top level of a React function definition to manage its state.

`initialState` is an optional value that can be used to set the value of `currentState` for the first render. The `stateSetter` function is used to update the value of `currentState` and rerender our component with the next state value.

```js
const [currentState, stateSetter] = useState(initialState);
```

### State Setter Callback Function

When the previous state value is used to calculate the next state value, pass a function to the state setter. This function accepts the previous value as an argument and returns an updated value.

If the previous state is not used to compute the next state, just pass the next state value as the argument for the state setter.

```js
function Counter({ initialCount }) {
 const [count, setCount] = useState(initialCount);
 return (
   <div>
     Count: {count}
     <button onClick={() => setCount(initialCount)}>Reset</button>
     <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
     <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
   </div>
 );
}
```

### Multiple State Hooks

`useState()` may be called more than once in a component. This gives us the freedom to separate concerns, simplify our state setter logic, and organize our code in whatever way makes the most sense to us!

```js

function App() {
 const [sport, setSport] = useState('basketball');
 const [points, setPoints] = useState(31);
 const [hobbies, setHobbies] = useState([]);
}
```

### Side Effects

The primary purpose of a React component is to return some JSX to be rendered. Often, it is helpful for a component to execute some code that performs side effects in addition to rendering JSX.

In class components, side effects are managed with lifecycle methods. In function components, we manage side effects with the Effect Hook. Some common side effects include: fetching data from a server, subscribing to a data stream, logging values to the console, interval timers, and directly interacting with the DOM.

### The Effect Hook

After importing `useEffect()` from the `'react'` library, we call this Hook at the top level of a React function definition to perform a side effect. The callback function that we pass as the first argument of `useEffect()` is where we write whatever JavaScript code that we’d like React to call after each render.

```js
import React, { useState, useEffect } from 'react';
 
function TitleCount() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  
  return <button onClick={(prev) => setCount(prev + 1)}>+</button>;
}
```

### Effect Cleanup Functions

The cleanup function is optionally returned by the first argument of the Effect Hook.

If the effect does anything that needs to be cleaned up to prevent memory leaks, then the effect returns a cleanup function. The Effect Hook will call this cleanup function before calling the effect again as well as when the component is being unmounted from the DOM.

```js
useEffect(() => {
  document.addEventListener('keydown', handleKeydown);
  return () => document.removeEventListener('keydown', handleKeydown);
});
```

### Multiple Effect Hooks

`useEffect()` may be called more than once in a component. This gives us the freedom to individually configure our dependency arrays, separate concerns, and organize our code in whatever way makes the most sense to us!

```js
function App(props) {
 const [title, setTitle] = useState('');
 useEffect(() => {
   document.title = title;
 }, [title]);
 
 const [time, setTime] = useState(0);
 useEffect(() => {
   const intervalId = setInterval(() => setTime((prev) => prev + 1), 1000);
   return () => clearInterval(intervalId);
 }, []);
  
 // ...
}
```

### Effect Dependency Array

The dependency array is used to tell the `useEffect()` method when to call our effect.

By default, with no dependency array provided, our effect is called after every render. An empty dependency array signals that our effect never needs to be re-run. A non-empty dependency array signals to the Effect Hook that it only needs to call our effect again when the value of one of the listed dependencies has changed.

```js
useEffect(() => {
 alert('called after every render');
});
 
useEffect(() => {
 alert('called after first render');
}, []);
 
useEffect(() => {
 alert('called when value of `endpoint` or `id` changes');
}, [endpoint, id]);
```

<!-- ------------------------ -->
## Controlled vs. Uncontrolled Form Fields

In React, form fields are considered either uncontrolled, meaning they maintain their own state, or controlled, meaning that some parent maintains their state and passes it to them to display. Usually, the form fields will be controlled.

The example code shows an uncontrolled and controlled input.

```js
const uncontrolledInput = <input />;

const controlledInput = (
  <input value={this.state.value} onChange={this.handleInputChange} />
);
```

### Controlled Components

A controlled form element in React is built with a change handler function and a value attribute.

```js
const controlledInput = (
  <input value={this.state.value} onChange={this.handleInputChange} />
);
```