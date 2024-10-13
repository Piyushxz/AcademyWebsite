import Navbar from "../components/Navbar"

const Home = () =>{
    return(
        <>
        <Navbar/>

        <div className="flex justify-center items-center ">
            <div className="flex flex-col">
                <div className="font-montserrat font-semibold text-3xl text-white ">
                    <h1>
                        Your Dream.
                    </h1>
                    <h1>
                        Our Expertise.
                    </h1>
                </div>
                <div className="font-montserrat font-medium text-xl text-white mt-24">
                    <h1>What brings you to us today?</h1>
                </div>
                <div className="flex flex-row mt-20">
                    <button className="mr-4 rounded-full border-4 border-indigo-500 pt-4 pb-4 pr-6 pl-6 font-montserrat font-bold text-sm text-white ">
                            NEET
                    </button>
                    <button className="mr-4 rounded-full border-4 border-indigo-500 pt-4 pb-4 pr-6 pl-6 font-montserrat font-bold text-sm text-white ">
                            JEE
                    </button>
                    <button className="mr-4 rounded-full border-4 border-indigo-500 pt-4 pb-4 pr-6 pl-6 font-montserrat font-bold text-sm text-white ">
                            Grade 6-10
                    </button>
                </div>
            </div>

            <div className="mt-24 ml-24">
                <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_4_olon7a.webp&w=640&q=75" className="max-h-96"/>
            </div>
        </div>
        </>
    )
}

export default Home