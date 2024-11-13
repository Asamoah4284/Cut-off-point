import Button from "../components/Button";
import "../App";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="flex flex-col items-center lg:flex-row px-8 lg:px-24 mt-7 lg:mb-44 bg-[#263ADE]">
      <aside className=" relative basis-3/5 lg:py-24 lg:px-16  text-white">
        {/* <div className="absolute hero-left h-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
          est!
        </div> */}
        <h1 className=" font-semibold mb-8 leading-none primary-header">
          Match Your <span className="">Results</span> to Great Programmes
        </h1>
        <p className="font-xl mb-4 leading-tight secondary-header">
          Check your options before you submit <br /> your application
        </p>
        <p className="text-[#B5B5B5] font-lg tertiary-header">
          For Wassce Holders & High Schoolers
        </p>
      </aside>
      <form className=" flex justify-center items-center flex-col gap-4 bg-white p-8 rounded-lg">
        <div className="flex-col flex">
          <label htmlFor="" className="mb-2 text-gray-400">
            Start Here👇
          </label>
          <div className="flex gap-1">
            <select
              className="py-2 px-4 pr-16 border bg-gray-200 border-blue-500 rounded outline-none focus:ring-2 text-sm max-w-40"
              name=""
              id=""
            >
              <option value="">KNUST</option>
              <option value="">UCC</option>
              <option value="">UDS</option>
              <option value="">LEGON</option>
              <option value="">UMAT</option>
              <option value="">UDS</option>
              <option value="">UHAS</option>
            </select>
            {/* <input
              placeholder="knust"
              type="text"
              className="py-2 px-2 border bg-gray-200 border-gray-300 rounded focus:outline-gray-200 focus:ring-2 focus:ring-gray-500 text-sm max-w-40"
            /> */}
            <span className=" flex items-center justify-center py-2 px-1 bg-gray-200 text-gray-700 rounded text-sm text">
              <img src="/images/gh.jpg" alt="" className="img-w" />
            </span>
          </div>
        </div>
        <Link
          to="/welcome"
          className="py-2 w-full bg-blue-600 text-white font-semibold rounded text-sm hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <button className="w-full">Continue</button>
        </Link>
      </form>
    </section>
  );
}

export default Hero;
