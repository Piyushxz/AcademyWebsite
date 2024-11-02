import Card from "../../components/Card"
import ClassroomComponent from "../../components/ClassroomComponent"
import { useNavigate } from "react-router-dom"
import JeeFaqs from "../../components/JeeFaqs"
const Jee = () =>{
    const navigate = useNavigate()
    return(
        <>
                    <div className="flex justify-center w-full mt-24">
                <div className="w-full sm:w-2/3 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex flex-col mb-8 sm:mb-0">
                        <h1 className="font-montserrat font-semibold text-3xl text-white">JEE Online Coaching</h1>
                        <span className="max-w-sm sm:max-w-md font-montserrat font-normal text-sm text-white mt-4">
                            Our JEE coaching programs are expertly designed to navigate the complexity of JEE concepts. The program balances its focus on both in-depth understanding and challenging problem-solving, empowering you with the confidence to ace the JEE Main and Advanced exams.
                        </span>
                    </div>
                    <div className="flex-shrink-0">
                        <img className="w-80" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081052/200_jee_pnsy0n.webp" alt="JEE Coaching" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-24 w-full mx-auto rounded-lg">
                <img className="w-2/3" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729669351/dark_w_CTA_12_eh5sqo.png" alt="Call to Action" />
            </div>

            <div className="w-full flex justify-center mt-20">
                <div className="w-full sm:w-2/3 flex">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">Online Coaching for NEET</h1>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full sm:w-2/3 flex flex-wrap justify-center gap-6">
                    <Card 
                        onClick={() => navigate("/jee/online-coaching-class-11")}
                        title={"For 11th"} 
                        title2={"1 year programs"} 
                        img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766512/U_11th_ah95gg.webp"} 
                    />
                    <Card 
                        onClick={() => navigate("/jee/online-coaching-class-12")}
                        title={"For 12th"} 
                        title2={"1 year programs"} 
                        img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766525/U_12th_tjph91.webp"} 
                    />
                    <Card 
                        onClick={() => navigate("/jee/online-coaching-class-12-droppers")}
                        title={"For 12th Plus"} 
                        title2={"1 year programs"} 
                        img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766519/U_12th__bv4mhn.webp"} 
                    />
                </div>
            </div>

            <div className="w-full flex justify-center mt-20">
                <div className="w-2/3">
                    <img className="w-full" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727297851/Homepage_Entry_Banner_nvf0yj.webp"/>
                </div>
            </div>
            <div className="w-full flex justify-center mt-20">
                <div className="w-2/3 flex">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">What’s special about our NEET Programs?</h1>
                </div>
            </div>

            <div className="w-full flex justify-center mt-2 items-center">
                <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="w-full sm:w-2/3 flex flex-col sm:flex-row rounded-lg h-auto">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex flex-col justify-center items-center p-4 sm:p-10 w-1/2 sm:w-1/4">
                            <img className="w-24 h-24 sm:w-40 sm:h-40" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268363/widget/stream_selection/live_intractive_class_lxfjvd.webp" />
                            <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs pt-4 sm:pt-10 text-center">Daily Live Interactive Classes</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 sm:p-10 w-1/2 sm:w-1/4">
                            <img className="w-24 h-24 sm:w-40 sm:h-40" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729493739/widget/stream_selection/daily_doubt_solving_huffs4.webp" />
                            <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs pt-4 sm:pt-10 text-center">Personalised Study Tools</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 sm:p-10 w-1/2 sm:w-1/4">
                            <img className="w-24 h-24 sm:w-40 sm:h-40" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268363/widget/stream_selection/weekly_self_study_plan_hegxyx.webp" />
                            <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs pt-4 sm:pt-10 text-center">Weekly Self-study Plan</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 sm:p-10 w-1/2 sm:w-1/4">
                            <img className="w-24 h-24 sm:w-40 sm:h-40" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729268362/widget/stream_selection/smart_test_taking_strategies_ouvab9.webp" />
                            <h1 style={{ color: "white" }} className="font-montserrat font-semibold text-xs pt-4 sm:pt-10 text-center">Score Improvement Strategy</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-20">
            <div className="w-2/3 flex">
                <h1 className="font-montserrat font-semibold text-3xl text-white py-6">Alternate Coaching You Can Explore</h1>
            </div>
        </div>

        <div className="w-full flex justify-center">
            <div className="w-2/3 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                {/* Distance Learning Card */}
                <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="w-full sm:w-1/2 h-32 rounded-lg flex justify-between items-center">
                    <div className="flex justify-center items-center">
                        <img className="w-24 h-24 p-4" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729681260/distance_learning_vwq4zl.webp" alt="Distance Learning" />
                        <h1 className="font-montserrat font-semibold text-2xl text-white">Distance Learning</h1>
                    </div>
                </div>
                {/* Online Test Series Card */}
                <div style={{ backgroundColor: "rgb(26, 36, 57)" }} className="w-full sm:w-1/2 h-32 rounded-lg flex justify-between items-center">
                    <div className="flex justify-center items-center">
                        <img className="w-24 h-24 p-4" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729681261/online_test_series_r6f0ms.webp" alt="Online Test Series" />
                        <h1 className="font-montserrat font-semibold text-2xl text-white">Online Test Series</h1>
                    </div>
                </div>
            </div>
        </div>


            <div className="mt-10">
                    <ClassroomComponent/>
            </div>
            <div className="w-full flex justify-center mt-14">
                <div className="w-2/3 flex ">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">JEE Online Coaching</h1>
                </div>
            </div>
            <div className="w-full flex justify-center mt-2">
                <div className="w-2/3 flex flex-col">
                    <span className="font-montserrat font-normal text-sm text-white ">
                    ALLEN’s JEE Online Coaching program is designed to help students prepare for the IIT JEE. These programs are designed based on the syllabus as per NCERT guidelines to ensure that students always remain a step ahead in their preparation. The program offers live courses, video lessons, doubt-clearing sessions, and study materials, including solved examples, important formulas, and conceptual questions that help memorize key concepts. The IIT online coaching also provides personalized evaluation to help students prepare for the JEE Main and Advanced exams.
                    </span>
                   
                </div>
            </div>

            <div className="w-full flex justify-center mt-20">
                <div className="w-2/3 flex ">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">Frequently Asked Questions</h1>
                </div>
            </div>
            <div className="w-full flex justify-center mt-2">
            <JeeFaqs/>

            </div>
            
        </>
    )
}

export default Jee