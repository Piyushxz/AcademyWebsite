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

            <div className="flex justify-center items-center mt-24">
             
                <div className="flex flex-col justify-center items-start ">
                   
                    <div className="font-montserrat font-semibold text-3xl text-white mb-8">
                        <h1>Your Dream.</h1>
                        <h1>Our Expertise.</h1>
                    </div>

                    <div className="font-montserrat font-medium text-xl text-white mb-16">
                        <h1>What brings you to us today?</h1>
                    </div>

                    <div className="flex space-x-4">
                        <button onClick={handleOpenNavModal}
                         className="rounded-full border-2 border-indigo-500 px-6 py-4 font-montserrat font-bold text-sm text-white">
                            NEET
                        </button>
                        <button onClick={handleOpenNavModal}
                        className="rounded-full border-2 border-indigo-500 px-6 py-4 font-montserrat font-bold text-sm text-white">
                            JEE
                        </button>
                        <button onClick={handleOpenNavModal}
                         className="rounded-full border-2 border-indigo-500 px-6 py-4 font-montserrat font-bold text-sm text-white">
                            Grade 6-10
                        </button>
                    </div>
                                  

                </div>

                <div className="ml-18 max-w-96 w-full">
                    <CarouselOne />
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
