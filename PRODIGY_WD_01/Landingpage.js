import React from 'react';
import './Landing.css';

class NewComponent extends React.Component {
  componentDidMount() {
    this.scrollNav();
  }

  scrollNav() {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove the active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the active class to the clicked link
        this.classList.add('active');

        // Smooth scroll to the section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <a href="#s1" className="active">Intro to React</a>
          <a href="#s2">Why React?</a>
          <a href="#s3">Important Usage</a>
          <a href="#s4">Concepts</a>
          <a href="#s5">Conclusion</a>
        </nav>
        <article id="s1">
          <h1>REACT - INTRODUCTION</h1>
          <p>React is a <b>popular JavaScript library for building user interfaces</b>, particularly for single-page applications where you need a fast, interactive user experience. It allows developers to create large web applications that can update and render efficiently in response to data changes.
          Setting up a React project from scratch typically involves using tools like <b>create-react-app</b> to quickly scaffold a new project with all the necessary configurations. The development process in React involves working with components, which can be either functional or class-based, and using JSX, a syntax extension that allows HTML-like code within JavaScript. State and props are central to managing dynamic data and passing information between components, while lifecycle methods (or hooks in functional components) enable developers to control the component's behavior during different phases of its existence. </p>
          
        </article>
        <article id="s2">
          <h2>WHY REACT ?  👍</h2>
          <p>Component-Based Architecture: React encourages breaking down the UI into reusable components, making it easier to manage and scale.<br></br>
Virtual DOM: React uses a virtual DOM to optimize updates, ensuring that only the necessary parts of the DOM are re-rendered.<br></br>
Unidirectional Data Flow: React’s data flow is one-way, which makes it easier to debug and understand how data changes affect the UI.</p>
        </article>
        <article id="s3">
          <h2>Usage</h2>
          <p>Components
Functional Components: Simpler components defined as JavaScript functions.<br></br>
1.Class Components: More complex components using ES6 classes, offering lifecycle methods.
Component Lifecycle: Understanding the phases of a component's life (mounting, updating, unmounting).<br></br>
2. JSX (JavaScript XML)
Syntax: Embedding HTML-like syntax in JavaScript.
Expressions: Using JavaScript expressions within JSX.
Attributes: Handling attributes and styling.<br></br>
3. State Management
Local State: Managing state within a single component using useState (functional) or this.state (class-based).
State Lifting: Passing state from child components to parent components.
Context API: Sharing state across the component tree without passing props manually.
React Query: Managing server-state and asynchronous data fetching.<br></br>
4. Props (Properties)
Passing Props: Providing data to components via props.
Default Props: Setting default values for props.
PropTypes: Validating props types and ensuring correct data is passed.<br></br>
5. Hooks
Basic Hooks: useState, useEffect, useContext, useReducer, useMemo, useCallback.
Custom Hooks: Creating reusable hooks to encapsulate logic.<br></br>
6. Event Handling
Event Listeners: Handling events like clicks, form submissions, etc.
Synthetic Events: React's cross-browser event handling system.<br></br>
7. Routing
React Router: Implementing client-side routing and navigation between different views or pages.</p>
        </article>
        <article className="margin" id="s4">
          <h2>Concepts</h2>
          <p> 8.Form Handling
Controlled Components: Managing form inputs with React state.
Uncontrolled Components: Using refs to handle form data.<br></br>
9. Conditional Rendering
If Statements: Rendering components based on conditions.
Ternary Operators: Conditionally displaying elements within JSX.<br></br>
10. Lists and Keys
Rendering Lists: Displaying lists of items using the .map() function.
Keys: Assigning unique keys to elements in a list to help React identify changes.<br></br>
11. Context API
Creating Context: Setting up a context for global state management.
Provider and Consumer: Using context to provide and consume data across components.<br></br>
12. Error Boundaries
Handling Errors: Creating components that catch JavaScript errors anywhere in their child component tree.<br></br>
13. Performance Optimization
React.memo: Memoizing components to prevent unnecessary re-renders.
useMemo and useCallback: Memoizing values and functions to optimize performance.
Code Splitting: Using React.lazy and Suspense to load components on demand.<br></br>
14. Testing
Unit Testing: Testing individual components using tools like Jest and React Testing Library.
Integration Testing: Testing interactions between components.<br></br>
15. Server-Side Rendering (SSR)
Next.js: Framework for server-side rendering and static site generation with React.
Gatsby: Static site generator using React for building fast, static websites.<br></br>
16. Static Site Generation
Static Export: Generating static HTML at build time, used in frameworks like Gatsby.<br></br>
17. Build Tools and Deployment
Webpack: Bundling and optimizing React applications.
Babel: Transpiling modern JavaScript for compatibility.
Deployment: Deploying React applications to platforms like Vercel, Netlify, or traditional servers.<br></br>
18. State Management Libraries
Redux: A library for managing application state with a global store and actions.
MobX: An alternative state management library with a more reactive approach.
Recoil: A state management library by Facebook for managing state in React applications.<br></br>
19. Advanced Patterns
Higher-Order Components (HOCs): Components that wrap other components to enhance them with additional functionality.
Render Props: Sharing code between components using a function prop.
Compound Components: Creating components that work together in a way that allows them to share implicit state.<br></br>
20. TypeScript with React
Type Checking: Adding type safety to React applications with TypeScript.
Props and State Types: Defining types for props and state to improve code reliability.</p>
        </article>

        <article className="margin" id="s5">
          <h2>Conclusion</h2>
          <p>React is <b>a powerful tool for building modern web applications</b>. By understanding its core concepts—components, JSX, state, props, and lifecycle methods—you can create dynamic and interactive UIs efficiently.
            <br></br> The React ecosystem is vast, with tools like React Router, Redux, and many others that can help scale your applications.</p>
        </article>
      </div>
    );
  }
}

export default NewComponent;
