# React CV App - The Odin Project

A CV Application made with React for the odin project curriculum.

[Live Link](https://remarkable-paprenjak-7ffb4b.netlify.app/)

![Repo Image](/src/assets/repoImage.png)

## Notes

This project has two branches. The main branch covers the React useState implementation for state management. In the signals branch I use the preact signals library to accomplish the same thing using signals instead. The signals branch is ahead of the main branch and will be the one that gets further updates in the future. The main branch simply covers all the points related to the odin project.

## DIY

To run either version of this app, clone the appropriate branch and run the following commands in your terminal:

CMD:

```
    npm install
    npm run dev
```

This will install all the node_modules and then run the app on a local server.

Make sure to have the latest version of node installed on your system.

## Folder Structure

```
    /.git               -> This github repo
    /node_modules
    /public
    /src
        /assets             -> Contains github repo
        /components         -> React components
        /styles             -> CSS Stylesheets
        /utils              -> Signals, Icons, Localstorage and other utilities
        App.jsx             -> Main Component
        main.jsx            -> REACT entry point
    .eslintrc.cjs
    .gitignore
    index.html
    package-lock.json
    package.json
    README.md           -> This README File
    vite.config.js      -> Vite Config File
```

## Key Concepts

### React

React is more than just a JavaScript library; it's a game changer in the world of web development. It empowers our CV Maker app with its component-based architecture, allowing us to build complex user interfaces from encapsulated pieces. React's declarative approach makes the code more predictable and easier to debug.

React shines in dynamic web applications like ours, where user interactions require immediate UI updates. It's a go-to choice for interactive websites, complex SPAs, and even mobile apps with React Native.

JS:

```
    import React from 'react';
    import CV from './components/CV';

    function App() {
        return <CV />;
    }
```

React facilitates building dynamic user interfaces with its component-based architecture. It's all about creating modular, reusable UI components.
Here, we're using React to render the CV component in our main App component, showcasing React's modular nature.

### useState()

useState is React's way of bringing stateful logic into functional components. It's a cornerstone of React Hooks, letting us hold and set state in a clean, elegant way. In our app, useState is crucial for handling user inputs and controlling component behavior, making our UIs dynamic and responsive.

From managing form inputs to controlling UI elements like modals and dropdowns, useState is versatile. It's essential in any React application that requires interactive elements and data that changes over time.

JS:

```
    import React, { useState } from 'react';

    function FormComponent() {
        const [name, setName] = useState('');

        return (
            <input value={name} onChange={(e) => setName(e.target.value)} />
        );
    }
```

useState allows us to add state to our functional components, enabling them to hold and update internal data.
In this snippet, useState is used to manage the value of a text input, demonstrating state handling for form elements.

### useEffect()

useEffect takes the game up a notch. It deals with the side effects of React components - operations that don't fit into the rendering phase. This Hook is perfect for handling data fetching, setting up subscriptions, and even directly interacting with the browser's API, like manipulating the document title or listening to window events.

The use cases for useEffect are vast. It's ideal for fetching data from an API when a component mounts, adding event listeners to DOM elements, and performing clean-up actions to prevent memory leaks, especially in large-scale applications.

JS:

```
    import React, { useEffect, useState } from 'react';

    function UserProfile({ userId }) {
        const [user, setUser] = useState(null);

        useEffect(() => {
            fetchUserById(userId).then(setUser);
        }, [userId]);

        return (
            <div>{user ? `User: ${user.name}` : 'Loading...'}</div>
        );
    }
```

useEffect is used for performing side effects in function components, such as API calls, data fetching, or subscriptions.
Here, useEffect fetches user data when the userId changes, a common pattern for data fetching in React.

### Preact Signals (signal and effect)

Preact Signals, especially signal and effect, provide a sleek reactive state management solution. signal is used to create reactive states that trigger re-renders when their values change. effect, on the other hand, runs side effects in response to changes in these signals. It’s a simple yet powerful way to manage state and side effects, ensuring our app remains responsive and up-to-date with user interactions.

This approach is particularly useful in scenarios where you need to manage shared state across multiple components or when dealing with complex state logic that goes beyond the capabilities of local component state.

JS:

```
    import { signal, effect } from '@preact/signals-react';

    const count = signal(0);

    effect(() => {
        console.log(`Count changed: ${count.value}`);
    });
```

signal creates reactive states, while effect is used for running side effects in response to changes in these signals.
This example demonstrates a simple counter signal. The effect logs a message every time the count changes.

### UUID Library

The UUID library in our project serves an important role in generating unique identifiers, which are vital in various aspects of web development. We use it to create distinct keys for list items, ensuring that each element in a list is uniquely identifiable. This is crucial for React's rendering and re-rendering process, as it helps the library accurately track and manage changes in lists, especially when they are dynamic and change frequently.

UUIDs are indispensable in any application that deals with unique records or items. They're widely used in databases for primary keys, in web applications for tracking user sessions, and in any scenario where collision-free, unique identifiers are required.

JS:

```
    import { v4 as uuidv4 } from 'uuid';

    function addNewItem(list, itemContent) {
        const newItem = { id: uuidv4(), content: itemContent };
        return [...list, newItem];
    }
```

The UUID library generates unique identifiers, crucial for differentiating elements, especially in dynamic lists.
In this snippet, uuidv4 generates a unique ID for a new item being added to a list, ensuring each item is uniquely identifiable.

## Final Notes

Working on this CV Maker app has been both a challenging and enriching experience. It's a project that showcases not just the power of React and its ecosystem, but also the depth of learning and application one can achieve through hands-on development. Throughout this journey, I've deepened my understanding of state management with both React's useState and useEffect hooks, and Preact Signals, explored the practical use of UUIDs for unique identification, and honed my skills in building dynamic, user-friendly interfaces.

This app is more than just a tool for creating CVs; it's a testament to the learning curve and potential that web development offers. It has been a playground for experimenting with new ideas and technologies, and there's still so much room for growth. Looking ahead, I'm excited about the potential updates that could further enhance this app. Features like more advanced customization options, integration with LinkedIn to fetch user data automatically, and perhaps even a feature to export the CV in different formats like Word or plain text. Each potential update not only promises to make the app more robust and user-friendly but also offers a new learning avenue for me.

This project is a living piece of my journey as a developer, and I'm eager to see where it will lead next. As it stands, it's a solid foundation and a reflection of my skills and passion for coding. The beauty of projects like this lies in their evolution - they grow and adapt, just like the developers who build them.
