import { useState } from "react";

// ================= NORMAL LEVEL REACT QUESTIONS (40) =================
const questions = [
  // -------- Unit I: JavaScript & ES6 --------
  { q: "What is the difference between var, let and const?", a: "var is function scoped, let and const are block scoped. const cannot be reassigned." },
  { q: "What is an arrow function?", a: "Arrow function is a shorter syntax for writing functions." },
  { q: "Why arrow functions are commonly used in React?", a: "They avoid binding issues and have cleaner syntax." },
  { q: "What is map() used for?", a: "map() transforms each element of an array and returns a new array." },
  { q: "Difference between map() and forEach()?", a: "map() returns a new array; forEach() does not." },
  { q: "What does filter() do?", a: "filter() selects elements based on a condition." },
  { q: "What is find() method?", a: "find() returns the first matching element from an array." },
  { q: "What is reduce() used for?", a: "reduce() converts an array into a single value." },
  { q: "What is destructuring?", a: "It extracts values from arrays or objects into variables." },
  { q: "What is spread operator?", a: "It copies or merges arrays and objects." },
  { q: "What is rest operator?", a: "It collects remaining values into an array." },
  { q: "What are ES6 modules?", a: "They allow code to be split using import and export." },

  // -------- Unit II: React Basics & JSX --------
  { q: "What is React?", a: "React is a JavaScript library for building user interfaces." },
  { q: "What is SPA?", a: "Single Page Application loads content dynamically without reload." },
  { q: "Difference between SPA and MPA?", a: "SPA updates content dynamically; MPA reloads pages." },
  { q: "What is JSX?", a: "JSX allows writing HTML-like syntax inside JavaScript." },
  { q: "Why JSX is preferred?", a: "It makes UI code more readable." },
  { q: "What is React.createElement()?", a: "It creates React elements without JSX." },
  { q: "What is a component?", a: "Reusable UI block in React." },
  { q: "Difference between functional and class components?", a: "Functional uses hooks; class uses lifecycle methods." },
  { q: "What is Virtual DOM?", a: "Lightweight copy of real DOM." },
  { q: "Why keys are used in lists?", a: "Keys help React identify list items." },

  // -------- Unit III: State, Events & Hooks --------
  { q: "What is state in React?", a: "State holds dynamic data of a component." },
  { q: "Difference between state and props?", a: "Props are read-only; state can change." },
  { q: "What is event handling in React?", a: "Handling user actions like clicks using event handlers." },
  { q: "What is useState hook?", a: "Hook used to manage state in functional components." },
  { q: "What is useEffect used for?", a: "It handles side effects like API calls." },
  { q: "When does useEffect execute?", a: "After component renders." },
  { q: "What is dependency array in useEffect?", a: "It controls when the effect runs." },
  { q: "What is useRef hook?", a: "Used to access DOM elements or persist values." },
  { q: "What is useContext?", a: "Used to avoid prop drilling." },
  { q: "What is useReducer?", a: "Used for complex state management." },
  { q: "What are custom hooks?", a: "Reusable logic built using hooks." },

  // -------- Unit IV: Forms --------
  { q: "What is a controlled component?", a: "Form elements controlled by React state." },
  { q: "What is an uncontrolled component?", a: "Form elements controlled using refs." },
  { q: "How do you handle form submission?", a: "Using onSubmit and preventDefault()." },
  { q: "How to validate forms in React?", a: "Using state and conditional rendering." },
  { q: "Why form validation is important?", a: "It ensures correct user input." },

  // -------- Unit V: HTTP & Routing --------
  { q: "What is fetch()?", a: "fetch() is used to make HTTP requests." },
  { q: "What is axios?", a: "Axios is a library for HTTP requests." },
  { q: "Difference between fetch and axios?", a: "Axios auto-handles JSON; fetch does not." },
  { q: "What is GET request?", a: "Used to fetch data from server." },
  { q: "What is POST request?", a: "Used to send data to server." },
  { q: "What is PUT request?", a: "Used to update existing data." },
  { q: "What is DELETE request?", a: "Used to delete data." },
  { q: "What is react-router-dom?", a: "Library for routing in React apps." },
  { q: "What is BrowserRouter?", a: "Provides routing using browser history." },
  { q: "What are query parameters?", a: "Data passed through URL." },

  // -------- Unit VI: Redux & Deployment --------
  { q: "What is Redux?", a: "Redux is a state management library." },
  { q: "What is store in Redux?", a: "Store holds the application state." },
  { q: "What is reducer?", a: "Reducer updates state based on action." },
  { q: "What is action in Redux?", a: "Action describes what happened." },
  { q: "What is dispatch?", a: "Dispatch sends action to reducer." },
  { q: "What happens when npm run build is executed?", a: "Creates optimized production build." },
  { q: "Why debugging is important?", a: "It helps identify and fix errors." }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentIndex(randomIndex);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen items-center flex ">
      <div className="bg-green-200 rounded-xl shadow-xl w-full max-w-full p-8 ml-24">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4 ">
          📘 React Normal Question Generator
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Concept Practice • Classroom Activity
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={generateQuestion}
            className="text-black px-6 py-2 rounded-lg"
          >
            Generate Question
          </button>
          {currentIndex !== null && (
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg"
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
          )}
        </div>

        {currentIndex !== null && (
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
            <p className="font-semibold text-lg text-gray-800">
              Q: {questions[currentIndex].q}
            </p>
            {showAnswer && (
              <p className="mt-3 text-gray-700">
                <strong>Answer:</strong> {questions[currentIndex].a}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
