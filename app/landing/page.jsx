'use client'
import {Poppins, Roboto} from 'next/font/google';
import {TfiWorld} from "react-icons/tfi";
import Marquee from "react-fast-marquee";
import techs from '@/app/components/utils/techs';
import {Button} from "@nextui-org/react";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {useState} from "react";
import projectsList from "@/app/projects/projectsList";
import Project from "@/app/components/projects/Project/Project";
import Modal from "@/app/components/projects/Modal/Modal";
import AlmostFooter from "@/app/components/almostFooter/AlmostFooter";
import {motion} from "framer-motion";

const poppinsBold = Poppins({
    weight: '600', subsets: ['latin'],
})
const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})
const roboto = Roboto({
    weight: '900', subsets: ['latin'],
})

export default function Page() {
    const [modal, setModal] = useState({active: false, index: 0})
    return (

            <div>
                <div className={'justify-center flex'}>
                    <div className={' flex-row md:w-[50vw] w-[90vw] text-center justify-center text-white'}>
                        <div className={'md:w-[40vw] w-[80vw] text-start justify-center  '}>
                            <div className={'flex'}>
                                <h1 className={`md:text-[2rem] text-[1rem] ${poppinsBold.className}`}>Welcome,</h1>
                                <h1 className={`md:text-[2rem] text-[1rem] mx-2  ${poppinsThin.className}`}>I'm</h1>
                            </div>
                        </div>
                        <div className={'md:text-center text-end md:w-full w-[80vw]'}>
                            <h1 className={`md:text-[4rem] text-[3rem]  ${roboto.className}`}>LAUTARO VELEZ</h1>
                        </div>
                        <div className={'md:w-[55vw] sm:w-full md:text-end text-end justify-center  '}>
                            <h1 className={`md:text-[2rem] text-[1rem] ${poppinsThin.className}`}>a Designer &
                                Developer.</h1>
                        </div>
                        <div>
                            <h3 className={`pt-12 ${poppinsThin.className}`}>I look up to create products visually
                                appealing
                                and to create emotional drive with my websites .</h3>
                        </div>
                    </div>
                </div>

                <div className={'w-full flex md:justify-start justify-center text-start md:mt-0 mt-12'}>
                    <div
                        className={'lg:w-[15vw] md:w-auto sm:w-[40vw] flex text-center justify-center items-center h-[12vh] bg-[#1C1B1B] lg:rounded-r-full md:lg:rounded-r-full rounded-3xl'}>
                        <div className={'text-start w-[60%] text-white'}>
                            <p className={`md:text-[1rem] text-[0.7rem] pl-6 ${poppinsBold.className}`}>Located in
                                Argentina</p>
                        </div>

                        <div className={'w-[40%] justify-end'}>
                            <TfiWorld className={'lg:w-[4vw] lg:h-[6vh] md:w-[4vw] md:h-[4vh] sm:w-[7vw] sm:h-[7vh] w-[7vw] h-[7vh] text-white'}  />
                        </div>
                    </div>
                </div>
                <div className={'flex w-full justify-center mt-12'}>
                    <div className={'lg:w-[60vw] md:w-[60vw] w-full'}>
                        <Marquee pauseOnHover gradient gradientColor={'#171717'} speed={100}
                                 className={'w-full sm:w-[50vw]'}>
                            {techs.map((tech) => <h1 key={tech.id}
                                                     className={`text-white lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] mx-4 ${poppinsThin.className}`}>{tech.title}</h1>)}
                        </Marquee>
                    </div>
                </div>
                <div className={'pt-12 flex text-center w-full justify-center'}>
                    <h1 className={`text-white lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] mx-4 ${poppinsThin.className}`}>&</h1>
                </div>
                <div className={'pt-12 flex text-center w-full justify-center'}>
                    <h1 className={`text-white lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] mx-4 ${poppinsThin.className}`}>Photoshop</h1>
                    <h1 className={`text-white lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] mx-4 ${poppinsThin.className}`}>Figma</h1>
                    <h1 className={`text-white lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] mx-4 ${poppinsThin.className}`}>Illustrator</h1>
                </div>
                <div className={'md:pt-40 pt-20 flex text-center w-[50vw] justify-center text-[lightgrey]'}>
                    <p className={`md:text-[1rem] text-[0.7rem] ${poppinsThin.className}`}>(BEYOND THE CODE)</p>
                </div>
                <div className={'pt-12 text-end md:w-[80vw] w-[95vw] justify-center text-white'}>
                    <p className={`lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] ${poppinsThin.className}`}>There’s no
                        greater joy than seeing an idea
                        come to life</p>
                    <p className={`lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] ${poppinsThin.className}`}>That’s your
                        baby</p>
                    <p className={`lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] ${poppinsThin.className}`}>I’d love yo
                        help you raise it.</p>
                </div>

                <div className={'md:pt-40 pt-20 flex text-start w-[50vw] justify-center text-[lightgrey]'}>
                    <p className={`md:text-[1rem] text-[0.7rem] ${poppinsThin.className}`}>(RECENT PROJECTS)</p>
                </div>
                <div className={'pt-12 justify-center text-white'}>
                    <div className='flex  justify-center align-middle'>
                        <div className='md:w-[80vw] w-full flex flex-col align-middle justify-center'>
                            {projectsList.slice(0, 4).map((project, index) => {
                                return <Project index={index} title={project.title} setModal={setModal} key={index}
                                                des={project.des} href={`/projects/${project.id}`}/>
                            })}
                        </div>
                        <Modal modal={modal} projects={projectsList}/>
                    </div>

                    <div className={'w-full justify-center flex pt-20'}>
                        <motion.a href="/projects" whileHover={{scale: 1.09}}>
                            <Button size={'lg'}
                                    className={`font-bold justify-between md:text-[1rem] text-[0.7rem] md:w-[16vw] w-auto `}
                                    radius={"full"} endContent={<MdKeyboardDoubleArrowRight
                                className={`font-bold justify-between text-xl md:w-[5vw] h-[5hv] `}/>}>More
                                work⁽⁶⁾ </Button></motion.a>
                    </div>
                </div>
                <AlmostFooter/>
            </div>

    )
}