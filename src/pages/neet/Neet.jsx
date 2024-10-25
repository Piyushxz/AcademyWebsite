import Card from "../../components/Card";

const Neet = () => {
    return (
        <>
            <div className="flex justify-center w-full mt-24">
                <div className="w-2/3  flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-montserrat font-semibold text-3xl text-white mb-8">NEET Online Coaching</h1>
                        <span className="max-w-96 font-montserrat font-normal text-sm text-white">Our NEET Online coaching programs prioritize the NCERT syllabus, a cornerstone for NEET success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the NEET exam</span>
                    </div>
                
                    <div className="size-80 mr-14">
                        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081871/200_neet_nd7zeb.webp"/>
                    </div>
                </div>


            </div>
        
            <div className="flex jusitfy-center items-center mt-24 w-2/3  mx-auto rounded-lg">
                    <img  className="w-full" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727444104/PLP_Ticker_tx7nvz.webp" />
            </div>

            <div className="w-full flex justify-center mt-20">
                <div className="w-3/5 flex justify-center bg-white">
                    <Card />
                </div>
            </div>

        </>
    );
}

export default Neet;
