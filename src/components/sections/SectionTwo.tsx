import { FaArrowRight } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <section className="p-[12vh] text-left flex flex-row max-sm:flex-col w-full items-center justify-between">
      <div className="flex flex-col ">
        <h2 className="text-4xl font-bold">
          Ready to dive into <span className="text-blue-600">HABOT</span>?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="mt-4 px-6 py-2 bg-green-700 w-1/2 font-semibold text-white rounded-md flex flex-row items-center justify-center">
          Sign up Today!
          <FaArrowRight className="ml-6" />
        </button>
      </div>
      <div className=" grid grid-cols-2  gap-4 text-xl text-zinc-800 ">
        <button className="px-8 py-3  border-1 hover:text-white hover:bg-amber-600 border-amber-600   rounded-md">
          Abu Dhabi
        </button>
        <button className="px-8 py-3  border-1 hover:text-white hover:bg-amber-600 border-amber-600   rounded-md">
          Dubai
        </button>
        <button className="px-8 py-3  border-1 hover:text-white hover:bg-amber-600 border-amber-600   rounded-md">
          Sharjah & Ajman
        </button>
        <button className="px-8 py-3  border-1 hover:text-white hover:bg-amber-600 border-amber-600   rounded-md">
          Fujairah
        </button>
        <button className="px-8 py-3  border-1 hover:text-white hover:bg-amber-600 border-amber-600   rounded-md">
          Ras Al Khaimah
        </button>
        <button className="px-8 py-3  border-1 hover:text-white hover:bg-amber-600 border-amber-600   rounded-md">
          Umm Al Quwain
        </button>
      </div>
    </section>
  );
};

export default SectionTwo;
