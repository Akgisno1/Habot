import { HiMenu } from "react-icons/hi"; // Importing the Hamburger icon

const NavSidebar = () => {
  return (
    <div className="max-sm:block hidden">
      <button
        className="text-gray-600 text-4xl font-bold"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <HiMenu />
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset text-3xl"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body flex flex-col gap-8 MT-12 text-gray-600 pl-12">
          <img src="navlogo.png" alt="HABOT logo" className="w-full mb-4" />

          <h5 className="text-left hover:bg-gray-200 py-2 font-bold rounded-md">
            Find Suppliers
          </h5>

          <div>
            <h5 className="font-semibold">Service Tags</h5>
            <ul className="list-none pl-4">
              <li>
                <a
                  className="block py-2 text-gray-600 hover:bg-gray-100 rounded"
                  href="#"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  className="block py-2 text-gray-600 hover:bg-gray-100 rounded"
                  href="#"
                >
                  School
                </a>
              </li>
              <li>
                <a
                  className="block py-2 text-gray-600 hover:bg-gray-100 rounded"
                  href="#"
                >
                  College
                </a>
              </li>
              <li>
                <a
                  className="block py-2 text-gray-600 hover:bg-gray-100 rounded"
                  href="#"
                >
                  Tutoring
                </a>
              </li>
            </ul>
          </div>

          {/* Full-width Login/Sign Up Button at the Bottom */}
          <button className="mt-auto w-full py-3 bg-green-700 text-white rounded-md hover:bg-green-500 transition-all font-bold">
            Login / Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavSidebar;
