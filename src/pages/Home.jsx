import CarouselOne from "../components/CarouselOne";
import Navbar from "../components/Navbar";
import CarouselTwo from "../components/CarouselTwo";
import Footer from "../components/Footer";
import CarouselTemp from "../components/CarouselTemp";
import HomeCards from "../components/HomeCards";
import ClassroomComponent from "../components/ClassroomComponent";
import { useModal } from "../context/modalContext";
import ModalComponent from "../components/NavModal";
const Home = () => {

    const {modalDispatch,isNavModalOpen} = useModal()
    const handleOpenNavModal = () =>{
        modalDispatch({
            type:"TOGGLE_NAVMODAL"
        })
    }
    return (
        <>
          {
            isNavModalOpen &&
            <ModalComponent/>
          }

        <div className="flex justify-center mt-14 px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-between w-full md:w-3/5">
        
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0">
                    <div className="font-montserrat font-semibold text-2xl md:text-3xl text-white mb-4 md:mb-8">
                        <h1>Your Dream.</h1>
                        <h1>Our Expertise.</h1>
                    </div>

                    <div className="font-montserrat font-medium text-lg md:text-xl text-white mb-6 md:mb-16">
                        <h1>What brings you to us today?</h1>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <button 
                            onClick={handleOpenNavModal}
                            className="rounded-full border-2 border-indigo-500 px-6 py-4 font-montserrat font-bold text-sm text-white"
                        >
                            NEET
                        </button>
                        <button 
                            onClick={handleOpenNavModal}
                            className="rounded-full border-2 border-indigo-500 px-6 py-4 font-montserrat font-bold text-sm text-white"
                        >
                            JEE
                        </button>
                        <button 
                            onClick={handleOpenNavModal}
                            className="rounded-full border-2 border-indigo-500 px-6 py-4 font-montserrat font-bold text-sm text-white"
                        >
                            Grade 6-10
                        </button>
                    </div>
                </div>

            
                <div className="md:ml-8 w-full max-w-full md:max-w-96 mt-8 md:mt-4">
    <CarouselOne />
</div>

            </div>
</div>



            <div className="mt-24">
                    <CarouselTwo/>
            </div>

            <div className="mt-24">
                <CarouselTemp/>
            </div>

            <div className="mt-24">
                <HomeCards/>
            </div>

            <div className="mt-24">
                    <ClassroomComponent/>
            </div>

        </>
    );
};

export default Home;
