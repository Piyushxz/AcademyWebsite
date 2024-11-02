const HomeCards = () => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="w-full max-w-5xl">
                    <div className="flex justify-center items-center">
                        <h2 className="font-montserrat font-medium text-3xl text-white mb-8">
                            Discover the perfect online program
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-10">
                        <div style={{ backgroundColor: "#1a2439" }} className="overflow-hidden rounded-lg m-4 flex flex-col w-full max-w-xs h-64">
                            <div>
                                <h1 className="font-montserrat font-semibold text-3xl text-white p-6">JEE</h1>
                            </div>
                            <div className="mt-6 flex justify-between items-center p-6">
                                <div className="flex items-center">
                                    <h1 style={{ color: "#78abfb" }} className="font-montserrat font-semibold text-xl mr-2">View</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#78abfb">
                                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                    </svg>
                                </div>
                                <div>
                                    <img className="w-full h-36 object-cover" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp" alt="JEE Program" />
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: "#1a2439" }} className="overflow-hidden rounded-lg m-4 flex flex-col w-full max-w-xs h-64">
                            <div>
                                <h1 className="font-montserrat font-semibold text-3xl text-white p-6">NEET</h1>
                            </div>
                            <div className="mt-6 flex justify-between items-center p-6">
                                <div className="flex items-center">
                                    <h1 style={{ color: "#78abfb" }} className="font-montserrat font-semibold text-xl mr-2">View</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#78abfb">
                                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                    </svg>
                                </div>
                                <div>
                                    <img className="w-full h-36 object-cover" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp" alt="NEET Program" />
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: "#1a2439" }} className="overflow-hidden rounded-lg m-4 flex flex-col w-full max-w-xs h-64">
                            <div>
                                <h1 className="font-montserrat font-semibold text-3xl text-white p-6">Grade 6-10</h1>
                            </div>
                            <div className="mt-6 flex justify-between items-center p-6">
                                <div className="flex items-center">
                                    <h1 style={{ color: "#78abfb" }} className="font-montserrat font-semibold text-xl mr-2">View</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#78abfb">
                                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                    </svg>
                                </div>
                                <div>
                                    <img className="w-full h-36 object-cover" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp" alt="Grade 6-10 Program" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCards;
