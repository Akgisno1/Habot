import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa"; // Import the icons from React Icons

const SectionOne = () => {
  return (
    <div
      className="relative bg-cover w-screen bg-center bg-no-repeat h-[700px] max-sm:h-[600px]"
      style={{
        backgroundImage: "url('dubai.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-sky-950 opacity-85"></div>
      <div className="relative z-10 flex flex-col items-center gap-2 justify-center h-full text-center text-white">
        <h1 className="text-6xl font-bold max-sm:text-4xl">
          Are You a Supplier?
        </h1>
        <p className="text-6xl font-medium max-sm:text-4xl">
          Explore Matching Opportunities.
        </p>
        <div className="flex sm:flex-row gap-2 w-[70vw] flex-col max-sm:w-full mt-4 max-sm:text-sm max-sm:px-4">
          <div className="flex items-center bg-white rounded-md w-full overflow-hidden flex-row max-sm:gap-1">
            <FaBriefcase className="text-amber-500 mx-2 text-2xl max-sm:text-lg " />
            <input
              type="text"
              placeholder="Search your required service here"
              className="px-4 py-3 max-sm:p-1 rounded-md text-lg w-full max-sm:text-sm outline-none"
            />
          </div>
          <div className="flex items-center bg-white rounded-md w-full overflow-hidden flex-row max-sm:gap-1">
            <FaMapMarkerAlt className="text-amber-500 mx-2 text-2xl max-sm:text-lg " />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="px-4 py-3 max-sm:p- rounded-md text-lg w-full max-sm:text-sm outline-none"
            />
          </div>
          <button className="text-lg max-sm:text-sm px-8 py-3 max-sm:p-2 bg-green-700 hover:bg-green-500 text-white rounded-md font-medium">
            Search
          </button>
        </div>
        <p className="mt-4 text-xl max-sm:flex max-sm:flex-col">
          <span className="font-semibold pr-2 max-sm:text-base">
            Are you a buyer?{" "}
          </span>
          <a href="#" className="underline text-white max-sm:text-base">
            Click here if you are looking to post a requirements
          </a>
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
