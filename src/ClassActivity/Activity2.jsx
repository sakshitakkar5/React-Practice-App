
import { useState } from "react";

// ================= SCENARIO-BASED PRACTICAL QUESTIONS (SYLLABUS ALIGNED) =================
const scenarios = [
  {
    id: 1,
    q: "A media company plans to create a news dashboard using React. Develop an application that fetches and displays news articles by category. Use React Router for navigation, useEffect for data fetching, conditional rendering for loading state, and ES6 features with JSX."
  },
  {
    id: 2,
    q: "A warehouse requires an application to manage inventory items. Create a React SPA to add, update, and remove items. Use spread operator and destructuring for state updates, controlled forms, reusable components, and fetch initial inventory data using an API."
  },
  {
    id: 3,
    q: "An online learning platform wants to display a list of courses. Fetch course data from an API using useEffect and display it using map(). Add a loading message while data is being fetched."
  },
  {
    id: 4,
    q: "A company wants a simple login system. Build a login form using controlled components and validate email and password before submission. Display a success message after login."
  },
  {
    id: 5,
    q: "Create a shopping cart feature where users can add and remove products. Manage cart state using useState and display total items dynamically."
  },
  {
    id: 6,
    q: "Build a student management system to add, edit, and delete student records. Use reusable components and pass data using props."
  },
  {
    id: 7,
    q: "Create a theme switcher application that toggles between light and dark themes using useState and conditional CSS."
  },
  {
    id: 8,
    q: "Develop a user profile page that fetches user details using fetch() and displays them using JSX. Handle errors and loading state."
  },
  {
    id: 9,
    q: "Create a feedback form with multiple input fields using controlled components and show submitted feedback below the form."
  },
  {
    id: 10,
    q: "Build a Todo List application where tasks can be added, marked as completed, and deleted using state updates."
  },
  {
    id: 11,
    q: "Create a simple routing application with Home, Services, and Contact pages using react-router-dom."
  },
  {
    id: 12,
    q: "Develop a product listing page that fetches products from an API and displays them in cards. Use conditional rendering for loading."
  },
  {
    id: 13,
    q: "Build a counter application using useState with Increment, Decrement, and Reset functionality."
  },
  {
    id: 14,
    q: "Create a form to register users and validate required fields before submission. Display error messages when validation fails."
  },
  {
    id: 15,
    q: "Create a reusable Button component and use it across multiple components."
  },
  {
    id: 16,
    q: "Build an application to fetch and display posts using Axios instead of fetch()."
  },
  {
    id: 17,
    q: "Develop a dashboard that shows data from multiple APIs using multiple useEffect hooks."
  },
  {
    id: 18,
    q: "Create a simple Redux store to manage application theme and display the selected theme in a component."
  },
  {
    id: 19,
    q: "Build a search feature that filters a list of items based on user input using controlled components."
  },
  {
    id: 20,
    q: "Create a React application and generate a production build using npm run build. Explain the output folder structure."
  }
];

export default function Activity2() {
  const [currentScenario, setCurrentScenario] = useState(null);

  const generateScenario = () => {
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    setCurrentScenario(scenarios[randomIndex]);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-teal-100 to-cyan-200 p-8">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-full p-10">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-4">
          🧩 React Scenario-Based Practical Questions
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Implement the given scenario using React concepts
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={generateScenario}
            className="bg-teal-600 hover:bg-teal-700 text-black px-8 py-3 rounded-lg font-medium"
          >
            Generate Scenario
          </button>
        </div>

        {currentScenario && (
          <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-lg">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Scenario {currentScenario.id}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {currentScenario.q}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
