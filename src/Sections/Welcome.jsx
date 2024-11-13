import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to CutoffPoint
      </h1>
      <p className=" font-semibold text-gray-600 mb-6">
        What's next? Enter your phone number to find out
      </p>
      <div className="w-full max-w-xs">
        <div className="flex items-center border border-gray-300 rounded-lg bg-gray-100 focus-within:ring-2transition duration-300 ease-in-out">
          <span className="flex items-center justify-center py-2 px-3 bg-gray-200 text-gray-700 rounded-l-lg border-r border-gray-300">
            <img src="/images/gh.jpg" alt="Ghana Flag" className="w-6 h-4" />
          </span>
          <input
            type="text"
            placeholder="024 4856 485"
            className="w-full p-3 rounded-r-lg bg-gray-100 focus:outline-none text-sm text-gray-700"
          />
        </div>
        <Link
          to="/verify-number"
          className="block mt-6 py-3 bg-blue-600 text-white font-semibold text-center rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
