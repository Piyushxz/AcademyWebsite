import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleHoverNEETClick = () => {
        navigate("/neet");
    };

    return (
        <>
            <div className="flex justify-between px-6 md:ml-24 md:mr-24">
                <div className="flex justify-start relative items-center"> 
                    <div className="block md:hidden mr-8">
                        <Sidebar/>
                    </div>

                    <div className="p-4 md:p-6 h-24" onClick={handleLogoClick}>
                        {/* Increased logo size */}
                        <img src="https://allen.in/logo_dark.svg" alt="Logo" className="h-12 md:h-8" />
                    </div>

                    {/* Sections to be hidden on smaller screens */}
                    <div className="hidden md:flex relative group m-6 hover:border-b-4 border-indigo-500 transition duration-300">
                        <h2 className="font-montserrat text-base font-semibold text-white">Exams</h2>
                        <div
                            style={{ backgroundColor: "#233a6c" }}
                            className="absolute left-0 top-12 hidden group-hover:block bg-white text-black p-4 pt-4 rounded-lg shadow-lg w-64 transition-opacity duration-700 ease-in-out"
                        >
                            <div className="flex flex-col">
                                <div onClick={handleHoverNEETClick} className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300">
                                    <h1 className="font-montserrat text-xs font-normal text-white">NEET</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                    </svg>
                                </div>
                                <div onClick={() => navigate('/jee')} className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300">
                                    <h1 className="font-montserrat text-xs font-normal text-white">JEE</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                    </svg>
                                </div>
                                <div onClick={() => navigate('/classes-6-10')} className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300">
                                    <h1 className="font-montserrat text-xs font-normal text-white">Class 6-10</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex relative group m-6 hover:border-b-4 border-indigo-500 transition duration-300">
                        <h2 className="font-montserrat text-base font-semibold text-white">Scholarships</h2>
                        <div style={{ backgroundColor: "#233a6c" }} className="absolute left-0 top-12 hidden group-hover:block bg-white text-black p-4 pt-4 rounded-lg shadow-lg w-64 transition-opacity duration-700 ease-in-out">
                            <div className="flex flex-col">
                                <div className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300">
                                    <h1 className="font-montserrat text-xs font-normal text-white">ADSAT</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                    </svg>
                                </div>
                                <div className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300">
                                    <h1 className="font-montserrat text-xs font-normal text-white">TALENTX</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex relative group m-6 hover:border-b-4 border-indigo-500 transition duration-300">
                        <h2 className="font-montserrat text-base font-semibold text-white">Test Series</h2>
                        <div style={{ backgroundColor: "#233a6c" }} className="absolute left-0 top-12 hidden group-hover:block bg-white text-black p-4 pt-4 rounded-lg shadow-lg w-64 transition-opacity duration-700 ease-in-out">
                            <div className="flex flex-col">
                                <div onClick={() => navigate("/neet/online-test-series")} className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300">
                                    <h1 className="font-montserrat text-xs font-normal text-white">NEET</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                    </svg>
                                </div>
                                <div onClick={() => navigate("/jee-main/online-test-series")} className="flex justify-between p-2 hover:bg-[#78abfb] transition-colors duration-300">
                                    <h1 className="font-montserrat text-xs font-normal text-white">JEE MAINS</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            
                <div className="flex items-center justify-end flex-1">
                    <div className="pt-6 pr-6 pl-4 pb-6 flex">
                        <button className="flex items-center rounded-full border border-white p-2 font-montserrat font-medium text-base text-black bg-white talk-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13q16 0 28-12t12-28v-89l-90-19-82 82Zm0-207-66 66q-12 12-28 12t-28-12l-31-31q-12-12-12-28t12-28l66-66Zm0-227-66 66q-12 12-28 12t-28-12l-31-31q-12-12-12-28t12-28l66-66Zm0-227-66 66q-12 12-28 12t-28-12l-31-31q-12-12-12-28t12-28l66-66Z" />
                            </svg>
                            <span className="ml-2">Talk to us</span>
                        </button>
                    </div>
                    <div className=" pr-4 flex">
                        <button className="flex items-center rounded-full border border-white p-2 font-montserrat font-medium text-base text-black bg-white">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
