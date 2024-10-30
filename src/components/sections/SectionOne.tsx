import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa"; // Import the icons from React Icons

const SectionOne = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[700px]"
      style={{
        backgroundImage: "url('dubai.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-sky-950 opacity-85"></div>
      <div className="relative z-10 flex flex-col items-center gap-2 justify-center h-full text-center text-white">
        <h1 className="text-6xl font-bold">Are You a Supplier?</h1>
        <p className="text-6xl font-medium">Explore Matching Opportunities.</p>
        <div className="flex mt-4 flex-row gap-2 max-sm:flex-col w-[70vw] ">
          <div className="flex items-center bg-white rounded-md w-full overflow-hidden">
            <FaBriefcase className="text-amber-500 mx-2 text-2xl" />
            <input
              type="text"
              placeholder="Search your required service here"
              className="px-4 py-3 rounded-md text-lg outline-none"
            />
          </div>
          <div className="flex items-center bg-white rounded-md w-full overflow-hidden">
            <FaMapMarkerAlt className="text-amber-500 mx-2 text-2xl" />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="px-4 py-3 rounded-md text-lg outline-none"
            />
          </div>
          <button className=" text-lg px-8 py-3 bg-green-700 hover:bg-green-500 text-white rounded-md font-medium">
            Search
          </button>
        </div>
        <p className="mt-4 text-xl">
          <span className="font-semibold pr-2">Are you a buyer? </span>
          <a href="#" className="underline text-white">
            Click here if you are looking to post a requirements
          </a>
        </p>
      </div>
    </section>
  );
};

export default SectionOne;
