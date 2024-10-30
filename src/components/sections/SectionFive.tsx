import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faFileAlt,
  faSearch,
  faFileSignature,
  faComments,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const SectionFive = () => {
  return (
    <div className="w-screen py-12 text-center">
      <h2 className="text-3xl font-bold">How it works?</h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>
      <div className="mt-8 grid sm:grid-cols-3 grid-cols-2 max-sm:px-12 px-[20vh]">
        <div className="flex flex-col items-center py-16 max-sm:py-8 bg-blue-100">
          <FontAwesomeIcon icon={faUserPlus} className="text-6xl text-black" />
          <p className="mt-2">Select Your Role and Sign Up</p>
        </div>
        <div className="flex flex-col items-center py-16 max-sm:py-8 ">
          <FontAwesomeIcon icon={faFileAlt} className="text-6xl text-black" />
          <p className="mt-2">Buyers Post Your Requirements</p>
        </div>
        <div className="flex flex-col items-center  py-16 max-sm:py-8 bg-blue-100 max-sm:bg-transparent">
          <FontAwesomeIcon icon={faSearch} className="text-6xl text-black" />
          <p className="mt-2">Review, Select, and Contact the Best Suppliers</p>
        </div>
        <div className="flex flex-col items-center max-sm:py-8 py-16 max-sm:bg-blue-100">
          <FontAwesomeIcon
            icon={faFileSignature}
            className="text-6xl text-black"
          />
          <p className="mt-2">
            Suppliers Complete your profile and get notified for opportunities
          </p>
        </div>
        <div className="flex flex-col items-center max-sm:py-8  bg-blue-100 py-16">
          <FontAwesomeIcon icon={faComments} className="text-6xl text-black" />
          <p className="mt-2">
            Contact to Buyers and Share your Quote for the service
          </p>
        </div>
        <div className="flex flex-col items-center max-sm:py-8 py-16">
          <FontAwesomeIcon icon={faHandshake} className="text-6xl text-black" />
          <p className="mt-2">
            Both the Parties can Connect and Make Business Leave a Feedback
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
