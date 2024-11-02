const ClassroomComponent = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-montserrat text-3xl text-white font-medium text-center">
                    Looking for a classroom-based program?
                </h1>

                <div
                    style={{ backgroundColor: "#1a2439" }}
                    className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center rounded-lg mt-10 p-6"
                >
                    <div className="flex flex-col justify-center items-start mb-4 md:mb-0">
                        <h1 className="font-montserrat text-2xl text-white font-medium p-2">
                            Present in 53 cities with
                        </h1>
                        <h1 className="font-montserrat text-2xl text-white font-medium p-2">
                            250+ Classrooms
                        </h1>

                        <button className="mt-6 font-montserrat bg-white py-4 rounded-full px-10">
                            Find a centre
                        </button>
                    </div>

                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            className="h-64 object-cover rounded-lg"
                            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707820846/Updated_size_classroom_ck4yjp.webp"
                            alt="Classroom"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassroomComponent;
