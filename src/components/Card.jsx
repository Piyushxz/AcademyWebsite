const Card = (props) => {
    return (
        <>
            <div onClick={props.onClick} style={{ backgroundColor: "#1a2439", overflow: "hidden" }} className="h-64 w-80 rounded-lg flex flex-col ">
                <div className="pt-4">
                    <h1 className="font-montserrat font-semibold text-xl text-white ml-6">{props.title}</h1>
                    <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-sm ml-6 ">{props.title2}</h1>
                </div>

                <div className="mt-16 flex justify-between items-center">
                    <div className="flex items-center p-6 mt-12">
                        <h1 style={{ color: "#78abfb" }} className="font-montserrat font-semibold text-xl mr-2">Enroll</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#78abfb">
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg>
                    </div>
                    <div >
                        <img  className="w-48" src={props.img} alt={props.title} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
