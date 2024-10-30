import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  return (
    <div className="w-[45%] max-sm:w-full  max-sm:h-[300px]">
      <ul
        className="flex justify-center font-semibold text-gray-700 dark:text-gray-400 text-3xl"
        id="tabs"
        role="tablist"
      >
        <li className=" text-center" role="presentation">
          <button
            onClick={() => setActiveTab("buyer")}
            className={`inline-block w-full p-4 border-b-4 max-sm:mr-4 ${
              activeTab === "buyer"
                ? "text-amber-600 border-amber-600"
                : "border-transparent"
            }`}
            id="buyer-tab"
            type="button"
            role="tab"
            aria-controls="buyer"
            aria-selected={activeTab === "buyer"}
          >
            Buyer
          </button>
        </li>
        <li className=" text-center" role="presentation">
          <button
            onClick={() => setActiveTab("supplier")}
            className={`inline-block w-full p-4 border-b-4 ${
              activeTab === "supplier"
                ? "text-amber-600 border-amber-600"
                : "border-transparent"
            }`}
            id="supplier-tab"
            type="button"
            role="tab"
            aria-controls="supplier"
            aria-selected={activeTab === "supplier"}
          >
            Supplier
          </button>
        </li>
      </ul>

      <div className="tab-content mt-4" id="tabsContent">
        {/* Buyer Tab Content */}
        {activeTab === "buyer" && (
          <div
            className="tab-pane fade show active"
            id="buyer"
            role="tabpanel"
            aria-labelledby="buyer-tab"
          >
            <div className="mt-4 text-left">
              <ul className="mt-2 space-y-2">
                {[
                  "Post your requirements.",
                  "Sit back for multiple suppliers to contact you.",
                  "Choose among the suppliers based on the ratings and reviews.",
                ].map((text, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-emerald-600">
                      <svg
                        className="w-5 h-5 rounded-full bg-emerald-600 text-white pt-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 15.5l-5-5 1.5-1.5 3.5 3.5 7.5-7.5 1.5 1.5-9 9z" />
                      </svg>
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Supplier Tab Content */}
        {activeTab === "supplier" && (
          <div
            className="tab-pane fade show active"
            id="supplier"
            role="tabpanel"
            aria-labelledby="supplier-tab"
          >
            <div className="mt-4 text-left">
              <ul className="mt-2 space-y-2">
                {[
                  "List your products or services.",
                  "Get notified when buyers are interested.",
                  "Respond to buyer inquiries to secure deals.",
                ].map((text, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-emerald-600">
                      <svg
                        className="w-5 h-5 rounded-full bg-emerald-600 text-white pt-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 15.5l-5-5 1.5-1.5 3.5 3.5 7.5-7.5 1.5 1.5-9 9z" />
                      </svg>
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
