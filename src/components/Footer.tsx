import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 relative mt-16 ">
      <div className="max-w-6xl mx-auto flex flex-row border-y pb-6 border-gray-400 max-sm:flex-row items-center justify-between relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <img src="navlogo.png" alt="HABOT logo" className="h-16 mb-2" />
          <span className="text-md font-bold ml-4">© R Singhania</span>
        </div>
        <div className="flex flex-row gap-14 text-base">
          <div className="flex flex-col justify-start items-start mt-4 md:mt-0">
            <p className="font-bold">Company</p>
            <a href="#" className="text-gray-400">
              About
            </a>
            <a href="#" className="text-gray-400">
              FAQ
            </a>
          </div>
          <div className="flex flex-col justify-start items-start mt-4 md:mt-0">
            <p className="font-bold">Terms</p>
            <a href="#" className="text-gray-400">
              Data Privacy
            </a>
            <a href="#" className="text-gray-400">
              Terms
            </a>
            <a href="#" className="text-gray-400">
              Accessibility
            </a>
          </div>
          <div className="flex flex-col justify-start items-start mt-4 md:mt-0">
            <p className="font-bold">Related</p>
            <a href="#" className="text-gray-400">
              Find Buyer
            </a>
            <a href="#" className="text-gray-400">
              Feedback
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-6 ">
          <a
            href="#"
            className="text-gray-100 rounded-full border-1 border-gray-100 p-2"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="#"
            className="text-gray-100 rounded-full border-1 border-gray-100 p-2"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-100 rounded-full border-1 border-gray-100 p-2"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="text-gray-100 rounded-full border-1 border-gray-100 p-2"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
