import Tabs from "../VideoTabs";

const SectionThree = () => {
  return (
    <section className="mx-[12vh] rounded-sm py-[14vh] px-[6vh] bg-blue-900 text-white ">
      <div className="flex flex-row max-md:flex-col w-full">
        <div className="relative max-sm:w-full w-[55%]">
          <img
            src="video.png"
            alt="Video thumbnail"
            className="w-full rounded-md"
          />
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with your video URL
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-red-600  py-2 px-4 rounded-xl hover:bg-red-400 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
        <Tabs />
      </div>
    </section>
  );
};

export default SectionThree;
