import HeaderAndCard from "../../components/HeaderAndCard";
const Class11th = () => {
    return (
        <>  
            <div className="w-full mt-24 flex justify-center">
                <div className="w-4/5 flex justify-start">
                    <h2 className="font-montserrat font-semibold text-3xl text-white">
                        NEET programs for Class 11th
                    </h2>
                </div>
            </div>

            <HeaderAndCard imageUrl="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729149656/U_recorded_cddplt.webp" headerTitle="Recorded Lectures Program" type=" RECORDED" cardTitle1="Nurture Recorded Lecture" cardTitle2="Video Lecture + Test Series" description1="Latest recordings covering full syllabus" description2=">20+ All India Tests" description3="Exclusive ALLEN'S Question Bank" price="24,999"/>
            
            <HeaderAndCard imageUrl="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729153658/U_olympiad_program_zghelj.webp" headerTitle="Online Test Series Packages" type="ONLINE TEST SERIES" cardTitle1="Nurture Test Series" cardTitle2="All India Test Series" description1="20+ (Part + Full) syllabus Tests" description2="Detailed solutions to all questions" description3="Exclusive ALLEN's Question Bank" price="7,999"/>

            <HeaderAndCard imageUrl="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729148776/school_marks_ancrd5.webp" headerTitle="Practice Package" type="PRACTICE" cardTitle1="Nurture Practice Packege" cardTitle2="Allen Question Bank" description1="15k+ curated questions covering all topics " description2="DPPs, PYQs & more" description3="Exclusive ALLEN's Question Bank" price="1,999"/>


        </>
    );
};

export default Class11th;
