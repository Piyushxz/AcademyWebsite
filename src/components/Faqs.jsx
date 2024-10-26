import React, { useState } from "react";

const FAQs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="p-4 bg-white rounded-lg w-2/3">
      <div id="accordion-flush">
        
        <div id="accordion-flush-heading-1" > 
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 dark:text-gray-400"
            onClick={() => toggleAccordion(1)}
            aria-expanded={openAccordion === 1}
          >
            <span className="font-montserrat font-semibold text-medium text-white">What is the best platform for NEET preparation?</span>
            <svg
              className={`w-3 h-3 transform ${openAccordion === 1 ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          {openAccordion === 1 && (
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                ALLEN’s NEET Online Courses are considered the best choice for NEET preparation, crafted by India’s top NEET faculty using NCERT and other leading reference materials.
              </p>
            </div>
          )}
        </div>

        <div id="accordion-flush-heading-2" className="mt-4"> 
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 dark:text-gray-400"
            onClick={() => toggleAccordion(2)}
            aria-expanded={openAccordion === 2}
          >
            <span className="font-montserrat font-semibold text-medium text-white">How can I crack NEET with online coaching?</span>
            <svg
              className={`w-3 h-3 transform ${openAccordion === 2 ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          {openAccordion === 2 && (
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                With ALLEN’s Online Coaching, you’ll gain access to top educators, effective preparation strategies, and flexible learning options to help you crack NEET confidently.
              </p>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default FAQs;
