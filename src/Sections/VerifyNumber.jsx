import { Link } from "react-router-dom";

function VerifyNumber() {
  return (
    <div className="flex justify-center items-center flex-col h-screen text-[#525252] bg-gray-50 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Verify Your Number
      </h1>
      <p className="text-base font-semibold text-gray-600 mb-6">
        Enter the code sent to your phone
      </p>
      <div className="w-full max-w-sm">
        <div className="flex justify-between gap-4 mb-8">
          <input
            type="text"
            maxLength="1"
            className="w-16 h-16 text-center text-2xl font-semibold rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            maxLength="1"
            className="w-16 h-16 text-center text-2xl font-semibold rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            maxLength="1"
            className="w-16 h-16 text-center text-2xl font-semibold rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            maxLength="1"
            className="w-16 h-16 text-center text-2xl font-semibold rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <Link
          to="/verify-number"
          className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-3 rounded-lg transition duration-300 ease-in-out"
        >
          Verify
        </Link>
        <p className="mt-4 text-sm text-gray-600">
          Didn't get the code?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Try Again
          </span>
        </p>
      </div>
    </div>
  );
}

export default VerifyNumber;
