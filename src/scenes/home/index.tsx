import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import MarqueePage from "@/scenes/home/marquee";
import Code from "@/assets/img_code.png"
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section
        id="home"
        className="gap-16 md:py-28 py-10 md:h-full md:pb-0 bg-center w-full bg-cover bg-[url('https://tailframes.com/images/squares-bg.webp')]">
            {/* {Image and Main Header} */}
            <motion.div 
                className="md:flex md:mx-52 px-5 items-center md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                {/* {Main Header} */}
                <div className="z-10 mt-32 md:basis-4/5">
                    {/* {Headings} */}
                    <motion.div
                     className="md:-mt-20"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true, amount: 0.5}}
                     transition={{duration: 0.5}}
                     variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                     }}>
                        <div className="relative">
                            <h1 className="basis-3/5 md:text-6xl text-4xl leading-tight font-gajkley">
                                Software Development, Mobile Development, Front-End, UI/UX
                            </h1>
                            <div className='md:text-5xl text-4xl text-primary-300 tracking-tighter font-reckless_neue'>
                                creating seamless digital experience.
                            </div>

                            <p className='my-5 md:text-start'>
                                Final year student majoring in Telecommunication Engineering who has an great interest in the field of Software Development especially Mobile Development using Kotlin Language, UI/UX, and front end.
                            </p>
                        </div>
                    </motion.div>

                    <hr className='mt-5 border-t-2 border-slate-500'/>

                    <div className='flex items-center'>
                        <img className='w-7 my-5 mr-2' src={Code} alt="" />
                        <div className='font-bold'>Frequently Used Stacks</div>
                    </div>

                    <div className='md:w-[900px] mb-10'>
                        <MarqueePage/>
                    </div>

                    <div className='flex flex-row space-x-3 items-center'>
                        <a href='https://www.linkedin.com/in/helmi-falah-hidayat-6a85b8254/'>
                            <AiFillLinkedin className='text-2xl bg-primary box-content p-3 rounded-3xl hover:bg-primary-300 shadow-lg cursor-pointer' color='white'/>
                        </a>
                        <a href="https://github.com/helmifalahh">
                            <AiFillGithub className='text-2xl bg-primary box-content p-3 rounded-3xl hover:bg-primary-300 shadow-lg cursor-pointer' color='white'/>
                        </a>
                        <ActionButton setSelectedPage={setSelectedPage}>Download CV</ActionButton>
                    </div>
                </div>
            </motion.div>
    </section>
  )
}

export default Home