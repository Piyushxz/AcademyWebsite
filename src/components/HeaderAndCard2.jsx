const HeaderAndCard2 = (props) =>{
    return(
        <>
                    <div className="w-full mt-20 flex justify-center flex-col items-center">
                <div className="w-4/5 flex justify-between items-center  relative">
                    <h2 className="font-montserrat font-semibold text-2xl text-white">
                        {props.headerTitle}
                    </h2>

                </div>
                <div className="w-4/5 flex justify-start">
                    <div style = {{backgroundColor: "#1a2439"}}className="w-80 h-64 mt-8 rounded-lg">
                            <div className="p-4  ">
                                <button className=" text-xs p-2 text-white rounded-full bg-black flex items">
                                <svg className="mr-2"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#D8DBDF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.867 5.733V8.4c0 2.333-1.2 3.333-3 3.333h-6c-1.8 0-3-1-3-3.333V5.733c0-1.766.69-2.766 1.8-3.146.36-.127.762-.187 1.2-.187h6c.438 0 .84.06 1.2.187 1.11.38 1.8 1.38 1.8 3.146z"></path><path stroke="#D8DBDF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.867 7.075v-.84c0-1.038.783-1.467 1.74-.947l.771.416.77.417c.958.52.958 1.37 0 1.89l-.77.417-.77.417c-.958.52-1.741.096-1.741-.948v-.822z"></path><path stroke="#D8DBDF" stroke-linecap="round" d="M2.867 5.067v0c-.92 0-1.667.746-1.667 1.666v3.482a3.333 3.333 0 003.334 3.333h6.518a1.815 1.815 0 001.815-1.815v0"></path></svg>

                                    {props.type}</button>
                            </div>

                            <div className="px-4 flex flex-col">
                                <h1 className="font-montserrat text-lg font-medium text-white">{props.cardTitle1}</h1>
                                <h1 style={{color:"#bdc3ce"}} className="font-montserrat text-sm font-normal">{props.cardTitle2}</h1>
                            </div>

                            <div className="flex jusitfy-center flex-col px-4 mt-4">
                                    <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/></svg>
                                    <h1 style={{color:"#bdc3ce"}} className="pl-2 font-montserrat text-xs font-normal">{props.description1}</h1>
                                    </div>

                                    <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/></svg>
                                    <h1 style={{color:"#bdc3ce"}} className="pl-2 font-montserrat text-xs font-normal">{props.description2}</h1>
                                    </div>
                                    <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/></svg>
                                    <h1 style={{color:"#bdc3ce"}} className="pl-2 font-montserrat text-xs font-normal">{props.description3}</h1>
                                    </div>
                            </div>
                        <div className="flex justify-between px-4 mt-6">
                            <h1 className="font-montserrat text-white font-semibold text-lg">  ₹{props.price}</h1>
                            <div className="flex items-center">
                                <h1 style={{ color: "rgb(63, 141, 253)" }} className="font-montserrat text-white font-semibold text-sm">Know More</h1>
                                <svg style={{ color: "rgb(63, 141, 253)" }} 
                                xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z"/></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderAndCard2