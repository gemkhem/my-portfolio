import React from 'react'
import RootLayout from '../../layout/RootLayout'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import AboutImg from '../../assets/images/about.png'


const About = () => {
    return (
        <RootLayout className={'space-y-8'}>

            {/* Intro section */}
            <h1 className="text-4xl text-zinc-200 font-bold">
                About Me
            </h1>

            <div className="space-y-8">
                <div className="w-full flex items-center gap-10 flex-wrap">
                    <div className="md:w-64 w-full h-auto flex items-center justify-center border border-zinc-900/40 bg-zinc-900/20 rounded-lg">
                        <img src={AboutImg} alt="about img" className="w-full aspect-square rounded-lg object-cover object-center" />
                    </div>
                    <div className="flex-1 space-y-5">
                        <p className="text-base text-zinc-300 font-normal">
                            As a frontend developer, I am ready to contribute my skills and expertise to building engaging and high-performance web applications. With a strong foundation in HTML, CSS, and JavaScript, along with experience in modern frameworks like React, I specialize in creating dynamic and user-friendly interfaces. My ability to translate design concepts into responsive and interactive experiences ensures seamless usability across devices. I am also skilled in optimizing web performance, implementing UI/UX best practices, and collaborating with backend teams to deliver complete solutions. Passionate about continuous learning, 
                        </p>
                        <p className="text-base text-zinc-300 font-normal">
                           I am eager to grow my expertise and contribute to innovative projects that enhance user experience and functionality.
                        </p>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between bg-blue-500/5 border border-blue-500/60 hover:border-500/80 md:px-6 px-3 py-3 rounded-lg group cursor-pointer ease-in-out duration-300">
                    <p className="text-sm md:text-base font-normal">
                        I am available for freelance work.
                    </p>
                    <Link to="mailto:gtech.official08@gmail.com" className="flex items-center gap-2 text-sm md:text-base font-semibold text-zinc-50 group-hover:text-zinc-200 ease-in-out duration-300">
                        Hire me <FaArrowRightLong className='group-hover:translate-x-1 ease-in-out duration-300' />
                    </Link>
                </div>
                <p className="text-base text-zinc-300 font-normal">
                   I specialize in building responsive and user-friendly web applications with a strong focus on performance and design. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I create seamless and engaging user interfaces. I am ready for freelancing opportunities, offering high-quality frontend solutions tailored to project needs. Always eager to learn and innovate, I ensure optimized functionality, accessibility, and smooth collaboration for successful project execution.
                </p>

            </div>


        </RootLayout>
    )
}

export default About
