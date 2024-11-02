import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle sidebar */}
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: '50' }}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      {isOpen && (
        <aside
          style={{ backgroundColor: '#0f1825' }}
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 border-r-4 border-indigo-500`}
          aria-label="Sidebar"
        >
          <div
            style={{ backgroundColor: '#0f1825' }}
            className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
          >
            <ul className="space-y-2 font-medium">
                    <li className="relative group">
        <div className="flex items-center p-2 rounded-lg dark:text-white hover:bg-[#78abfb] mt-14 ml-4">
            <span className="ms-3 font-montserrat font-semibold text-sm text-white">Exams</span>
        </div>

        
        <div className="absolute top-full left-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-48 hidden group-hover:block transition-opacity duration-300 z-50">
            <div onClick={() => navigate('/neet')} className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300 cursor-pointer">
            <h1 className="font-montserrat text-xs font-normal text-white">NEET</h1>
            </div>
            <div onClick={() => navigate('/jee')} className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300 cursor-pointer">
            <h1 className="font-montserrat text-xs font-normal text-white">JEE</h1>
            </div>
            <div onClick={() => navigate('/classes-6-10')} className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300 cursor-pointer">
            <h1 className="font-montserrat text-xs font-normal text-white">Class 6-10</h1>
            </div>
        </div>
        </li>

                <li className="relative group">
        <div className="flex items-center p-2 rounded-lg bg-gray-800 dark:text-white hover:bg-[#78abfb] mt-4 ml-4">
            <span className="ms-3 font-montserrat font-semibold text-sm text-white">Scholarships</span>
        </div>

        {/* Modal that appears below the Scholarships item */}
        <div
           
            className="absolute top-full left-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-48 hidden group-hover:block transition-opacity duration-300 z-50"
        >
            <div className="flex flex-col">
            <div
                className="flex justify-between p-2  hover:bg-[#78abfb] transition-colors duration-300 cursor-pointer"
                onClick={() => navigate('/adsat')}
            >
                <h1 className="font-montserrat text-xs font-normal text-white">ADSAT</h1>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
                >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
            </div>
            <div
                className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300 cursor-pointer"
                onClick={() => navigate('/talentx')}
            >
                <h1 className="font-montserrat text-xs font-normal text-white">TALENTX</h1>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
                >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
            </div>
            </div>
        </div>
        </li>

                <li className="relative group">
        <div className="flex items-center p-2 rounded-lg dark:text-white hover:bg-[#78abfb] mt-4 ml-4">
            <span className="ms-3 font-montserrat font-semibold text-sm text-white">Test Series</span>
        </div>

        {/* Modal that appears below on hover */}
        <div
            className="absolute left-0 top-full hidden group-hover:block bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 transition-opacity duration-300 ease-in-out z-50"
        >
            <div className="flex flex-col">
            <div
                onClick={() => navigate('/neet/online-test-series')}
                className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300 cursor-pointer"
            >
                <h1 className="font-montserrat text-xs font-normal text-white">NEET</h1>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
                >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
            </div>
            <div
                onClick={() => navigate('/jee-main/online-test-series')}
                className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300 cursor-pointer"
            >
                <h1 className="font-montserrat text-xs font-normal text-white">JEE MAINS</h1>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
                >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
            </div>
            </div>
        </div>
        </li>

            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
