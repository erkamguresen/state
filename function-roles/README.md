# Function Roles

Time for a new function role: **`component`**. Remember those messy UI procedures from the last module? They're gone!

From now on if you need to update the DOM programmatically you will do it in your handlers by _rendering_ new DOM elements using a **component** function, and updating the DOM with the new element.

---

## Components

Components are functions that return a _component_ of the user interface. The term "component" is very common in web development and depending on which language or framework you are using, it's exact definition can change. For now a component is just a function that returns a DOM element.

Remember _component-based design_ from UX/UI? This is it! In this module you will begin learning how to write functions that return the UI components planned by the designer. When you create a wireframe, you will need to think about how it can be broken into components. Once you have a plan for the components in your page you can begin developing and testing each component separately before integrating them into a full page.

Here is a little checklist to help you find out if a function is being used as a component:

- it returns a DOM element
- if it has parameters, they are plain JS data
- it may import _logic_, _handlers_, _components_ or _state_
- it may have unit tests or a `test.html` file

Even components can have different roles! You'll learn more about this in the following module (Single Page Apps) when your entire UI is rendered using components. No more HTML :) Here's a little preview:

- _presentational_: Components that display data in a friendly way. These are generally pure functions: data in -> element out. The DOM elements they render are usually not interactive
- _container_: Components that define how the web page works. These will often use _state_, _handlers_ and _presentational components_ to add interactivity to a web page.
