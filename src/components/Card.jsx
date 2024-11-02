const Card = (props) => {
    return (
        <>
            <div
                onClick={props.onClick}
                style={{ backgroundColor: "#1a2439", overflow: "hidden" }}
                className="h-64 sm:h-72 w-full sm:w-80 rounded-lg flex flex-col p-4 sm:p-6"
            >
                {/* Content Section */}
                <div className="pt-2 sm:pt-4 flex-grow">
                    <h1 className="font-montserrat font-semibold text-lg sm:text-xl text-white ml-2 sm:ml-6">
                        {props.title}
                    </h1>
                    <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs sm:text-sm ml-2 sm:ml-6">
                        {props.title2}
                    </h1>
                </div>

                {/* Bottom Section with Enroll Button and Image */}
                <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center ml-2 sm:ml-6">
                        <h1 style={{ color: "#78abfb" }} className="font-montserrat font-semibold text-base sm:text-xl mr-2">
                            Enroll
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#78abfb"
                        >
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg>
                    </div>
                    <div className="flex justify-end">
                        <img className="w-32 sm:w-48" src={props.img} alt={props.title} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
