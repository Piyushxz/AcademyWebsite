const Navbar = () =>{
    return(
        <>
            <div className="flex justify-between ml-24 mr-24">
                <div className="flex justify-center ">
                    <div className="p-6">
                        <img  src="https://allen.in/logo_dark.svg" alt="Logo" className="h-8 " />
                    </div>
               
                    <div className="m-6 hover:border-b-4 border-indigo-500 transition duration-300">
                        <h2 className=" font-montserrat text-base font-semibold text-white">Exams</h2>
                    </div>
                    <div className="m-6 hover:border-b-4 border-indigo-500 transition duration-300">
                        <h2 className="font-montserrat text-base font-semibold text-white">Programs</h2>
                    </div>
                    <div className="m-6 hover:border-b-4 border-indigo-500 transition duration-300">
                        <h2 className="font-montserrat text-base font-semibold text-white">Scholarships</h2>
                    </div>
                    <div className="m-6  hover:border-b-4 border-indigo-500 transition duration-300">
                        <h2 className="font-montserrat text-base font-semibold text-white">Test Series</h2>
                    </div>
                </div>

                <div className="flex">
                    <div className="pt-6 pr-6 pl-4 pb-6 flex ">
                        
                    <button className="flex items-center rounded-full border border-white p-2 font-montserrat font-medium text-base text-black bg-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#0A1128"
                                className="mr-4" 
                            >
                                <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                            </svg>
                            Talk to us
                        </button>
                    </div>
                    <div className="pt-6 pr-6 pl-4 pb-6">
                    <button className="rounded-full border border-white pt-4 pb-4 pr-6 pl-6 font-montserrat font-semibold text-xs text-white hover:bg-white hover:text-black transition">
                        Login
                    </button>
                    
                    </div>
                        
                </div>
                
            </div>
        </>
    )
}

export default Navbar