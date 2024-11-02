import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import ClassroomComponent from "../../components/ClassroomComponent";
import FAQs from "../../components/Faqs";
const Neet = () => {
    const navigate = useNavigate()
    return (
        <>
                    <div className="flex justify-center w-full mt-24 px-4">
                <div className="w-full sm:w-2/3 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex flex-col mb-8 sm:mb-0">
                        <h1 className="font-montserrat font-semibold text-2xl sm:text-3xl text-white mb-4 sm:mb-8 text-center sm:text-left">NEET Online Coaching</h1>
                        <span className="max-w-md font-montserrat font-normal text-sm text-white text-center sm:text-left leading-relaxed">
                            Our NEET Online coaching programs prioritize the NCERT syllabus, a cornerstone for NEET success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the NEET exam.
                        </span>
                    </div>

                    <div className="w-48 sm:w-80 sm:mr-14 flex justify-center sm:justify-end mt-6 sm:mt-0">
                        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081871/200_neet_nd7zeb.webp" className="w-full h-auto rounded-lg" alt="NEET Coaching" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-12 sm:mt-24 w-full sm:w-2/3 mx-auto rounded-lg px-4">
                <img className="w-full h-auto rounded-lg" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727444104/PLP_Ticker_tx7nvz.webp" alt="PLP Ticker"/>
            </div>

            <div className="w-full flex justify-center mt-12 sm:mt-20 px-4">
                <div className="w-full sm:w-2/3 flex justify-center sm:justify-start">
                    <h1 className="font-montserrat font-semibold text-2xl sm:text-3xl text-white text-center sm:text-left py-6">Online Coaching for NEET</h1>
                </div>
            </div>

                        <div className="w-full flex justify-center">
                <div className="w-full sm:w-2/3 flex flex-col sm:flex-row justify-center gap-4 p-4">
                    <Card 
                        onClick={() => navigate("/neet/online-coaching-class-11")}
                        title="For 11th"
                        title2="1 year programs"
                        img="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766512/U_11th_ah95gg.webp"
                    />
                    <Card 
                        onClick={() => navigate("/neet/online-coaching-class-12")}
                        title="For 12th"
                        title2="1 year programs"
                        img="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766525/U_12th_tjph91.webp"
                    />
                    <Card 
                        onClick={() => navigate("/neet/online-coaching-class-12-droppers")}
                        title="For 12th Plus"
                        title2="1 year programs"
                        img="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766519/U_12th__bv4mhn.webp"
                    />
                </div>
            </div>


                        <div className="w-full flex justify-center mt-20">
                            <div className="w-2/3 flex ">
                                <h1 className="font-montserrat font-semibold text-3xl text-white py-6">What’s special about our NEET Programs?</h1>
                            </div>
                        </div>
                        <div className="w-full flex justify-center mt-2 items-center">
                            <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="w-full sm:w-2/3 flex flex-wrap justify-center h-auto sm:h-64 rounded-lg p-4">
                                <div className="flex flex-col justify-center items-center p-4 sm:p-6 w-1/2 md:w-1/4">
                                    <img className="w-20 h-20 sm:w-40 sm:h-40" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268363/widget/stream_selection/live_intractive_class_lxfjvd.webp" alt="Daily Live Interactive Classes" />
                                    <h1 className="font-montserrat font-semibold text-xs sm:text-sm pt-2 sm:pt-4 text-center text-white">Daily Live Interactive Classes</h1>
                                </div>
                                <div className="flex flex-col justify-center items-center p-4 sm:p-6 w-1/2 md:w-1/4">
                                    <img className="w-20 h-20 sm:w-40 sm:h-40" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729493739/widget/stream_selection/daily_doubt_solving_huffs4.webp" alt="Personalised Study Tools" />
                                    <h1 className="font-montserrat font-semibold text-xs sm:text-sm pt-2 sm:pt-4 text-center text-white">Personalised Study Tools</h1>
                                </div>
                                <div className="flex flex-col justify-center items-center p-4 sm:p-6 w-1/2 md:w-1/4">
                                    <img className="w-20 h-20 sm:w-40 sm:h-40" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268363/widget/stream_selection/weekly_self_study_plan_hegxyx.webp" alt="Weekly Self-study Plan" />
                                    <h1 className="font-montserrat font-semibold text-xs sm:text-sm pt-2 sm:pt-4 text-center text-white">Weekly Self-study Plan</h1>
                                </div>
                                <div className="flex flex-col justify-center items-center p-4 sm:p-6 w-1/2 md:w-1/4">
                                    <img className="w-20 h-20 sm:w-40 sm:h-40" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268362/widget/stream_selection/smart_test_taking_strategies_ouvab9.webp" alt="Score Improvement Strategy" />
                                    <h1 className="font-montserrat font-semibold text-xs sm:text-sm pt-2 sm:pt-4 text-center text-white">Score Improvement Strategy</h1>
                                </div>
                            </div>
                        </div>



            <div className="w-full flex justify-center mt-20">
                <div className="w-2/3 flex">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">Alternate Coaching you can explore</h1>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-full max-w-2xl h-auto flex flex-col md:flex-row justify-between gap-6 px-4">
                    <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="w-full md:w-1/2 h-32 rounded-lg flex items-center">
                        <div className="flex justify-center items-center">
                            <img className="w-24 h-24 p-6" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729681260/distance_learning_vwq4zl.webp" alt="Distance Learning" />
                            <h1 className="font-montserrat font-semibold text-2xl text-white p-6">Distance Learning</h1>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="w-full md:w-1/2 h-32 rounded-lg flex items-center">
                        <div className="flex justify-center items-center">
                            <img className="w-24 h-24 p-6" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729681261/online_test_series_r6f0ms.webp" alt="Online Test Series" />
                            <h1 className="font-montserrat font-semibold text-2xl text-white p-6">Online Test Series</h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className="mt-10">
                    <ClassroomComponent/>
            </div>

            <div className="w-full flex justify-center mt-14">
                <div className="w-2/3 flex ">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">NEET Online Coaching</h1>
                </div>
            </div>
            <div className="w-full flex justify-center mt-2">
                <div className="w-2/3 flex flex-col">
                    <span className="font-montserrat font-normal text-sm text-white ">ALLEN’s NEET Online Coaching Courses are meticulously crafted to equip students with the knowledge and strategies needed to excel in the NEET exam. To secure a seat in a prestigious medical college, preparation must be strategic, consistent, and guided by expert mentors. ALLEN’s NEET Online Course offers an integrated approach, combining high-quality study materials and practice papers, ensuring thorough preparation under the guidance of our experienced and renowned faculty.
                    At ALLEN, we prioritize quality without compromise. Our comprehensive NEET preparation materials are designed to simplify complex concepts and accelerate your learning process. The course includes subject-specific tests in Physics, Chemistry, Botany, and Zoology, allowing students to evaluate their performance and target areas for improvement. Additionally, ALLEN provides improvement books to help students strengthen their weak areas and track their progress throughout their preparation journey. Enroll today and take a step closer to your medical dream with ALLEN’s NEET Online Coaching!</span>
                    <span className="font-montserrat font-normal text-sm text-white mt-2" >At ALLEN, we prioritize quality without compromise. Our comprehensive NEET preparation materials are designed to simplify complex concepts and accelerate your learning process. The course includes subject-specific tests in Physics, Chemistry, Botany, and Zoology, allowing students to evaluate their performance and target areas for improvement. Additionally, ALLEN provides improvement books to help students strengthen their weak areas and track their progress throughout their preparation journey. Enroll today and take a step closer to your medical dream with ALLEN’s NEET Online Coaching!</span>

                </div>
            </div>
            <div className="w-full flex justify-center mt-20">
                <div className="w-2/3 flex ">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">Frequently Asked Questions</h1>
                </div>
            </div>
            <div className="w-full flex justify-center mt-2">
            <FAQs/>
            </div>

        </>
    );
}

export default Neet;
