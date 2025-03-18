import ProjectManager from '../assets/Project-Manager.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/contactUs.avif'
import img3 from '../assets/contact.png'

const About = () => {
    return (
        <div>
            <section className="py-14 lg:py-24 relative z-0 bg-blue-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1 className="max-w-3xl mx-auto slidein [--slidein-delay:300ms] opacity-0 font-bold text-2xl  text-gray-900 mb-5 md:text-4xl md:leading-normal">
                        Revolutionizing Healthcare with AI-Powered
                        <span className="text-[#004aad]"> Voice Assistance </span>
                    </h1>
                    <p className="max-w-2xl mx-auto slidein [--slidein-delay:500ms] opacity-0 text-center text-base font-normal leading-7 text-gray-500 mb-9">
                        Transforming patient communication, streamlining clinic operations, and enhancing care with human-like voice AI.</p>
                </div>
            </section>

            <div className="max-w-7xl my-5 w-full mx-auto p-5 lg:flex-row md:text-start text-center flex-col md:mt-20 mt-10 flex items-center justify-center md:gap-20 gap-14">
                <div className="lg:max-w-[50%] w-full">
                    <h1 className="font-semibold md:text-4xl text-3xl  text-zinc-900">Our Story</h1>
                    <p className="text-zinc-600 md:mt-7 mt-3">At Omni Agent, we believe technology should simplify, not complicate, healthcare. Founded with a vision to bridge the gap between patients and providers, we set out to create an AI-powered voice assistant that feels as intuitive and reliable as speaking to a human. We saw clinics overwhelmed with calls, patients frustrated by long wait times, and care teams stretched thin — and we knew there had to be a better way.
                        <br /><br />
                        With our cutting-edge voice AI, we’re redefining patient communication, transforming scheduling, and giving healthcare staff the freedom to focus on what matters most: delivering exceptional care.
                    </p>
                </div>
                <div className="lg:max-w-[50%] w-full">
                    <img src={ProjectManager} alt="" />
                </div>
            </div>

            <div className="max-w-7xl my-5 w-full mx-auto p-5 lg:flex-row flex-col-reverse md:mt-32 mt-10 flex items-center justify-center md:gap-20 gap-14">
                <div className="lg:max-w-[50%] w-full">
                    <img src={img1} alt="" />
                </div>
                <div className="lg:max-w-[50%] w-full md:text-start text-center">
                    <h1 className="font-semibold md:text-4xl text-3xl text-zinc-900">Our Mission</h1>
                    <p className="text-zinc-600 md:mt-7 mt-3">Empowering healthcare providers with seamless, human-like voice AI to improve patient experiences and streamline operations. <br /><br />
                        We aim to take the burden off front desk teams, reduce appointment no-shows, and make sure patients feel cared for — even before they walk through the door.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl my-5 w-full mx-auto p-5 lg:flex-row flex-col md:mt-20 mt-10 flex items-center justify-center md:gap-20 gap-14">
                <div className="lg:max-w-[50%] w-full text-zinc-600 md:text-start text-center">
                    <h1 className="font-semibold md:text-4xl text-3xl text-zinc-900">Our Vision</h1>
                    <p className="text-zinc-600 md:mt-7 mt-3">We envision a world where healthcare is accessible, efficient, and always within reach. By harnessing the power of voice technology, we want to eliminate barriers to care, ensure patients never feel forgotten, and help providers build lasting relationships with their communities.
                    </p>
                    <p className='md:mt-5 mt-3'>A future where:</p>
                    <ul className='list-disc mt-2 ml-5 space-y-3 text-start'>
                        <li> Patients feel heard.</li>
                        <li> Clinics run smarter.</li>
                        <li> Healthcare becomes truly patient-first.</li>
                    </ul>
                </div>
                <div className="lg:max-w-[50%] w-full">
                    <img src={img2} alt="" />
                </div>
            </div>

            <div className="max-w-7xl my-5 w-full mx-auto p-5 lg:flex-row flex-col-reverse md:mt-24 mt-10 flex items-center justify-center md:gap-20 gap-14">
                <div className="lg:max-w-[40%] w-full">
                    <img src={img3} alt="" />
                </div>
                <div className="lg:max-w-[50%] w-full text-zinc-600 md:text-start text-center">
                    <h1 className="font-semibold md:text-4xl text-3xl text-zinc-900">Our Ethos</h1>
                    <p className="md:mt-7 mt-3">At the heart of Omni Agent lies a simple belief: Care is human. Even with advanced AI, we prioritize empathy, trust, and seamless service. Every feature we build is designed to enhance, not replace, human connection — amplifying healthcare teams' abilities rather than automating compassion out of the process.
                    </p>
                    <ul className='list-disc mt-5 ml-5 space-y-3 text-start '>
                        <li> Empathy-Driven Innovation: Tech that listens, learns, and supports.
                        </li>
                        <li> Reliability Without Limits: 24/7 availability, zero burnout.
                        </li>
                        <li> Always Evolving: Constantly learning, continuously improving.
                        </li>
                    </ul>
                    <p className='md:mt-5 mt-3'>We don’t just build bots. We build bridges — connecting patients and providers like never before.</p>
                </div>
            </div>

        </div>
    )
}

export default About