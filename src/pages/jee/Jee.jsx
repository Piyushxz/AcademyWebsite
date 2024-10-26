import Card from "../../components/Card"
const Jee = () =>{
    return(
        <>
            <div className="flex justify-center w-full mt-24">
                <div className="w-2/3  flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-montserrat font-semibold text-3xl text-white mb-8">JEE Online Coaching</h1>
                        <span className="max-w-96 font-montserrat font-normal text-sm text-white">Our JEE coaching programs are expertly designed to navigate the complexity of JEE concepts. The program balances its focus on both in-depth understanding and challenging problem-solving, empowering you with confidence to ace the JEE Main and Advanced exams.</span>
                    </div>
                
                    <div className="size-80 mr-14">
                        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081052/200_jee_pnsy0n.webp"/>
                    </div>
                </div>


            </div>

            <div className="flex jusitfy-center items-center mt-24 w-2/3  mx-auto rounded-lg">
                    <img  className="w-full" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729669351/dark_w_CTA_12_eh5sqo.png" />
            </div>

            <div className="w-full flex justify-center mt-20">
                <div className="w-2/3 flex ">
                    <h1 className="font-montserrat font-semibold text-3xl text-white py-6">Online Coaching for NEET</h1>
                </div>
            </div>

            <div className="w-full flex justify-center ">

                <div className="w-2/3 flex justify-center ">
                    <Card onClick={()=>navigate("/jee/online-coaching-class-11")}
                    title={"For 11th"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766512/U_11th_ah95gg.webp"} />
                    <Card onClick={()=>navigate("/jee/online-coaching-class-12")}
                    title={"For 12th"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766525/U_12th_tjph91.webp"} />
                    <Card onClick={()=>navigate("/jee/online-coaching-class-12-droppers")}
                    title={"For 12th Plus"} title2={"1 year programs"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729766519/U_12th__bv4mhn.webp"} />
                </div>
            </div>

        </>
    )
}

export default Jee