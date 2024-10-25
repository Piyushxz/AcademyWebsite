import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
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
                <div className="w-2/3 flex justify-center ">
                    <Card onClick={()=>navigate("/neet/online-coaching-class-11")}
                    title={"For 11th"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766512/U_11th_ah95gg.webp"} />
                    <Card onClick={()=>navigate("/neet/online-coaching-class-12")}
                    title={"For 12th"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766525/U_12th_tjph91.webp"} />
                    <Card onClick={()=>navigate("/neet/online-coaching-class-12-droppers")}
                    title={"For 12th Plus"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766519/U_12th__bv4mhn.webp"} />
                </div>
            </div>
        
        </>
    );
}

export default Neet;
