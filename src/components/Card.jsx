const Card = () =>{
    return(
        <>
                                <div style={{ backgroundColor: "#1a2439", overflow: "hidden" }} className="h-64 w-80 rounded-lg mr-8 flex flex-col">
                            <div>
                                <h1 className="font-montserrat font-semibold text-3xl text-white p-6">JEE</h1>
                            </div>

                            <div className="mt-12 flex justify-between items-center">
                                <div className="flex items-center p-6">
                                    <h1 style={{ color: "#78abfb" }} className="font-montserrat font-semibold text-xl mr-2">View</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#78abfb">
                                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                    </svg>
                                </div>
                                <div>
                                    <img className="w-[500px]" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp" alt="JEE Program" />
                                </div>
                            </div>

                        </div>
        </>
    )
}
export default Card