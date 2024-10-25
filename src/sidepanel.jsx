import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';  // Assuming you're using TailwindCSS or custom styles

function App() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">AI Content Brief Manager</h1>
      
      <div className="mb-4">
        <label htmlFor="keywordInput" className="block text-sm font-medium text-gray-700">Enter Keyword or URL:</label>
        <input type="text" id="keywordInput" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        <button id="fetchDataBtn" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md">Fetch SEO Data</button>
      </div>

      <div id="seoDataDisplay" className="bg-white p-4 rounded-md shadow-sm"></div>

      <div className="mt-6">
        <button id="generateBriefBtn" className="bg-green-500 text-white px-4 py-2 rounded-md">Generate Content Brief</button>
      </div>

      <div id="briefDisplay" className="bg-white mt-4 p-4 rounded-md shadow-sm"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
