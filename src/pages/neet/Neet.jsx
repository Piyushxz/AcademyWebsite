import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import ClassroomComponent from "../../components/ClassroomComponent";
const Neet = () => {
    const navigate = useNavigate()
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
                <div className="w-2/3 flex ">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">Online Coaching for NEET</h1>
                </div>
            </div>

            <div className="w-full flex justify-center ">

                <div className="w-2/3 flex justify-center ">
                    <Card onClick={()=>navigate("/neet/online-coaching-class-11")}
                    title={"For 11th"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766512/U_11th_ah95gg.webp"} />
                    <Card onClick={()=>navigate("/neet/online-coaching-class-12")}
                    title={"For 12th"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766525/U_12th_tjph91.webp"} />
                    <Card onClick={()=>navigate("/neet/online-coaching-class-12-droppers")}
                    title={"For 12th Plus"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766519/U_12th__bv4mhn.webp"} />
                </div>
            </div>

            <div className="w-full flex justify-center mt-20">
                <div className="w-2/3 flex ">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">What’s special about our NEET Programs?</h1>
                </div>
            </div>

            <div className="w-full flex justify-center mt-2 items-center">
                <div style={{backgroundColor:"rgb(26, 36, 57)"}} className="w-2/3 flex h-64 rounded-lg">
                    <div className="flex flex-row justify-center ">
                        <div className="flex flex-col justify-center items-center p-10">
                            
                            <img className="w-40 h-40"src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268363/widget/stream_selection/live_intractive_class_lxfjvd.webp"/>
                            <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs pt-10 ">Daily Live Interactive Classes</h1>
                            
                          

                        </div>
                        <div className="flex flex-col justify-center items-center p-10">
                            
                            <img className="w-40 h-40"src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729493739/widget/stream_selection/daily_doubt_solving_huffs4.webp"/>
                            <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs pt-10 ">Personalised Study Tools</h1>
                            
                          

                        </div>
                        <div className="flex flex-col justify-center items-center p-10">
                            
                            <img className="w-40 h-40"src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268363/widget/stream_selection/weekly_self_study_plan_hegxyx.webp"/>
                            <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs pt-10 ">Weekly Self-study Plan</h1>
                            
                          

                        </div>
                        <div className="flex flex-col justify-center items-center p-10">
                            
                            <img className="w-40 h-40"src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268362/widget/stream_selection/smart_test_taking_strategies_ouvab9.webp"/>
                            <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs pt-10 ">Score Improvement Strategy

                                </h1>
                            
                          

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-20">
                <div className="w-2/3 flex ">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">Alternate Coaching you can explore</h1>
                </div>
            </div>
            <div className="w-full flex justify-center ">
                <div  className="w-2/3 h-64 flex justify-between ">
                    <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="w-1/2 h-32  rounded-lg flex justify-between">
                        <div className="flex jusitfy-center items-center">
                            <img className="w-24 h-24 p-6"src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729681260/distance_learning_vwq4zl.webp"/>
                            <h1 className="font-montserrat font-semibold text-2xl text-white p-6">Distance Learning</h1>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="w-1/2 h-32  rounded-lg flex justify-between ml-6">
                        <div className="flex jusitfy-center items-center">
                            <img className="w-24 h-24 p-6"src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729681261/online_test_series_r6f0ms.webp"/>
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
            

        </>
    );
}

export default Neet;
