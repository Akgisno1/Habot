import { BiChevronDown } from "react-icons/bi";

const Dropdown = () => {
  return (
    <div className="dropdown flex items-center flex-row gap-6">
      <button className="flex items-center text-gray-600 hover:bg-gray-200 p-1 px-2 rounded-md">
        Find Suppliers
      </button>

      <button
        className="flex items-center text-gray-600 hover:bg-gray-200  px-2 rounded-md"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Find Service Tags
        <BiChevronDown className="ml-2 text-gray-600 text-3xl" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a className="dropdown-item" href="#">
            Education
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            School
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            College
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Tutoring
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
