# React Exercise: ButtonComponent and ImageComponent

This project demonstrates the basics of using React by creating and integrating two simple components: `ButtonComponent` and `ImageComponent`.

## How It Works

React is a JavaScript library for building user interfaces. It allows you to create reusable components, each responsible for rendering a part of your application. Components can accept **props** to customize their behavior or appearance.

### Components Created

1. **ButtonComponent**: A functional component that displays a button with a customizable label.
2. **ImageComponent**: A functional component that displays an image.

### Step-by-Step Implementation

1. **Initialize the React Project**:
   ```bash
   npx create vite@latest
   cd my-react-exercise
   ```

2. **Create ButtonComponent**:
   File: `src/ButtonComponent.jsx`
   ```jsx
   const ButtonComponent = function(props) {
     return <button>{props.buttonLabel}</button>;
   };

   export default ButtonComponent;
   ```

3. **Create ImageComponent**:
   File: `src/ImageComponent.jsx`
   ```jsx
   const ImageComponent = function() {
     return <img src="https://via.placeholder.com/150" alt="Placeholder" />;
   };

   export default ImageComponent;
   ```

4. **Integrate Components in App.jsx**:
   File: `src/App.jsx`
   ```jsx
   import React from 'react';
   import ButtonComponent from './ButtonComponent';
   import ImageComponent from './ImageComponent';

   const App = () => {
     return (
       <div>
         <h1>Welcome to My React Exercise</h1>
         <ButtonComponent buttonLabel="Click Me!" />
         <ImageComponent />
       </div>
     );
   };

   export default App;
   ```

5. **Run the Application**:
   Start the development server using:
   ```bash
   npm start
   ```

   Visit `http://localhost:3000` in your browser to see the application.

## How React Works

- **Components**: Reusable building blocks of a React application.
- **Props**: Short for properties, these are inputs to components that make them dynamic and customizable.
- **JSX**: A syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.

React applications are typically built by composing multiple components together, passing data between them using props, and handling dynamic behavior using state (not covered in this example).

## Learning Notes

1. Start with small components to understand the basics of React.
2. Use props to make components reusable and dynamic.
3. Focus on understanding JSX and how it translates to HTML rendering.

## Conclusion

This exercise was a simple introduction to React. By building two components and integrating them into the main application, I learned how to structure a React project, use props, and render components dynamically.

