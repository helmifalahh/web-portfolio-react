import HDesc from "@/shared/HDesc"
import HText from "@/shared/HText"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Photo from "@/assets/my-photo.png"
import Cert_1 from "@/assets/cert_1_pengembang.png"
import Cert_2 from "@/assets/cert_2_prog101.png"
import Cert_3 from "@/assets/cert_3_github.png"
import Cert_CPS from "@/assets/cert_cps.png"
import BangkitLogo from "@/assets/logo-bangkit.png"
import CPSLogo from "@/assets/logo-cps.png"
import Code from "@/assets/img_code.png"
import { Link } from "react-router-dom";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const About = ({setSelectedPage}: Props) => {
  return (
    <section
      id="about"
      className="items-center md:mx-52 px-5">
        <motion.div
            className="md:flex items-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
              <div className="">
                  <HText>About</HText>
                  <HDesc>me.</HDesc>
                  <h1 className="text-3xl font-bold leading-tight mt-5">Helmi Falah Hidayat</h1>
                  <p className='mt-2 text-justify lg:w-4/5'>
                  Final year student majoring in Telecommunication Engineering who has an great interest in the field of Software Development especially Mobile Development using Kotlin Language, UI/UX, and front end. Has practical experience in mobile development at Bangkit Academy 2023 on Android Learning Path. Have two year experience in operating Ubuntu Linux for VoIP and IMS configuration in practicum teaching. I am able to work together in a team, able to demonstrate good analytical and communication skills, extensive leadership experience through various activities at the university, especially in the laboratory.
                  </p>
              </div>

              <div className="my-4 items-center md:z-10">
                <div className="relative">
                  <img className="rounded-2xl" src={Photo} />
                  <div className="absolute flex flex-col bottom-3 md:left-[-40px] z-10 space-y-2">
                    <div className="bg-sky-300 p-3 pr-6 rounded-full">
                      <div className="flex flex-row items-center">
                        <img className='w-5 mx-2' src={Code} alt="" />
                        <h1 className="text-sm">Software Eengineer</h1>
                      </div>
                    </div>
                    <div className="bg-orange-400 p-3 pr-6 rounded-full">
                      <div className="flex flex-row items-center">
                        <img className='w-5 mx-2' src={Code} alt="" />
                        <h1 className="text-sm">Android Developer</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <h1>helmifalah2002@gmail.com</h1>
              </div>
        </motion.div>

        <div className="my-10">
          <HText>Experience</HText>
          <HDesc>personal journey.</HDesc>
        </div>

        <Link to="blog-bangkit">
          <div className="md:rounded-2xl rounded-xl p-[2px] bg-gradient-to-tr my-6 from-[#D16262] via-transparent to-[#D16262]">
            <div className="bg-[url(./assets/bg-bangkit-rev.png)] rounded-xl bg-cover md:pb-5">
              <div className="inset-0 flex flex-col">
                <img className="w-28 m-4 sm:m-8" src={BangkitLogo}/>
                <h1 className="text-xl mx-4 sm:mx-8 text-red-950 font-semibold">Mobile Development - Bangkit Academy 2023 by Google, GoTo, Traveloka</h1>
                <h1 className="text-sm mx-4 sm:mx-8">An program held by the Indonesian Ministry of Education in collaboration with Dicoding Academy which inludes three learning paths namely machine learning, android development, and cloud computing.</h1>
                <div className="md:flex m-4 lg:m-0 lg:mb-4 sm:m-2 sm:ms-8 md:ms-8 lg:ms-8 my-5 gap-2">
                  <div className="md:flex mt-3 md:w-[500px] p-2 rounded-2xl bg-gradient-to-r from-[#C30000] from-20% to-[#FF7D7D] to-97%">
                    <img className="rounded-xl" src={Cert_1}/>
                  </div>
                  <div className="md:flex mt-3 w-auto md:w-[500px] p-2 rounded-2xl bg-gradient-to-r from-[#C30000] from-20% to-[#FF7D7D] to-97%">
                    <img className="rounded-xl" src={Cert_2}/>
                  </div>
                  <div className="md:flex mt-3 w-auto lg:w-80 lg:pl-2 lg:pt-2 lg:pb-2 lg:pr-0 p-2 lg:rounded-l-2xl rounded-2xl lg:rounded-none bg-gradient-to-r from-[#C30000] from-20% to-[#FF7D7D] to-97% overflow-hidden">
                    <img className="lg:rounded-l-xl rounded-xl lg:rounded-none object-cover object-left-top" src={Cert_3}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="blog-cps">
          <div className="md:rounded-2xl rounded-xl p-[2px] bg-gradient-to-tr my-6 from-[#007D0D] via-transparent to-[#007D0D]">
            <div className="bg-[url(./assets/bg-cps-rev.png)] rounded-xl bg-cover md:pb-5">
              <div className="inset-0 flex flex-col">
                <img className="w-40 m-4 sm:m-8 lg:w-72" src={CPSLogo}/>
                <h1 className="text-xl mx-4 sm:mx-8 text-red-950 font-semibold">Practicum Coordinator - Cyber Physical System Laboratory</h1>
                <h1 className="text-sm mx-4 sm:mx-8">An program held by the Indonesian Ministry of Education in collaboration with Dicoding Academy which inludes three learning paths namely machine learning, android development, and cloud computing.</h1>
                <div className="md:flex m-4 lg:m-0 lg:mb-4 sm:m-2 sm:ms-8 md:ms-8 lg:ms-8 my-5 gap-2">
                  <div className="md:flex mt-3 md:w-96 p-2 rounded-2xl bg-gradient-to-r from-[#019510] from-20% to-[#0FCF22] to-97%">
                    <img className="rounded-xl" src={Cert_CPS}/>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </Link>
    </section>
  )
}

export default About