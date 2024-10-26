import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
const SchoolHomePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex justify-center w-full mt-24">
                <div className="w-2/3 flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-montserrat font-semibold text-3xl text-white mb-8">Grade 6-10</h1>
                        <span className="max-w-96 font-montserrat font-normal text-sm text-white">
                            Our programs for Grades 6-10 ensure success in school exams, Olympiads, and other competitive tests. Focused on key NCERT subjects, we nurture fundamentals, problem-solving, and scientific thinking, equipping students for a competitive edge and a promising future.
                        </span>
                    </div>

                    <div className="size-80 mr-14">
                        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081870/200_grade_6_10_lakdfs.webp" alt="Grade 6-10" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-24 w-2/3 mx-auto rounded-lg">
                <img className="w-full" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727347657/web_6-10_cikhfw.webp" alt="Program Overview" />
            </div>

            <div className="w-full flex justify-center mt-12">
                <div className="w-2/3 flex flex-wrap gap-4 ">
                    <Card
                        
                        onClick={() => navigate("/class-6")}
                        title="For 6th"
                 
                        img="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729767218/6th_iztyjw.webp"
                    />
                    <Card
                    
                        onClick={() => navigate("/class-7")}
                        title="For 7th"
                    
                        img="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729767252/7th_w5d0mn.webp"
                    />
                    <Card
                        onClick={() => navigate("/class-8")}
                        title="For 8th"
                       
                        img="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766505/U_8th_xhrt8e.webp"
                    />
                    <Card
                        onClick={() => navigate("/class-9")}
                        title="For 9th"
                      
                        img="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766508/U_9th_tjtptw.webp"
                    />
                    <Card
                        onClick={() => navigate("/class-10")}
                        title="10th"
              
                        img="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766510/U_10th_fervli.webp"
                    />
                </div>
            </div>
        </>
    );
};

export default SchoolHomePage;
