import { useState } from "react";
const JeeFaqs = () =>{
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
              <span className="font-montserrat font-semibold text-medium text-white">What is the importance of joining ALLENs IIT JEE Online coaching program?</span>
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
                The IIT JEE coaching program provides the specialized guidance, expert faculty, comprehensive study material, and competitive learning environment. It helps students understand the exam pattern, provide strategies to tackle difficult problems, and offer regular practice tests for self-assessment.
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
              <span className="font-montserrat font-semibold text-medium text-white">Are there any scholarships available for IIT JEE aspirants at ALLEN?</span>
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
                ALLEN provides scholarships for IIT JEE aspirants based on their performance in the scholarship test conducted at ALLEN.
                </p>
              </div>
            )}
          </div>
          <div id="accordion-flush-heading-2" className="mt-4"> 
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 dark:text-gray-400"
              onClick={() => toggleAccordion(3)}
              aria-expanded={openAccordion === 3}
            >
              <span className="font-montserrat font-semibold text-medium text-white">What will be the validity of the online coaching program?</span>
              <svg
                className={`w-3 h-3 transform ${openAccordion === 3 ? "rotate-180" : ""}`}
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
            {openAccordion === 3 && (
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                The program starts from the day of purchase, and its validity depends on the plan purchased.
                </p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    );
}

export default JeeFaqs