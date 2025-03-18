import { useState } from "react";
import Accordion from "../Components/Accordion"
import img2 from '../assets/contact.png'

const features = [
    {
        title: "Effortless Voice Scheduling",
        description:
            "Omni Agent handles appointment scheduling with AI precision, reducing your team's workload.",
    },
    {
        title: "Seamless Appointment Management",
        description:
            "Patients can book, reschedule, or cancel appointments anytime, without waiting on hold.",
    },
    {
        title: "Automatic Reminders & No-Show Prevention",
        description:
            "Omni Agent sends voice or text reminders to reduce missed appointments.",
    },
    {
        title: "Post-Visit Follow-Ups",
        description:
            "Schedules follow-ups, shares medication instructions, and collects feedback.",
    },
];

const Feature = () => {
    const [openTab, setOpenTab] = useState<number | null>(null);

    const toggleTab = (idx: number) => {
        setOpenTab(openTab === idx ? null : idx);
    };

    return (
        <div>
            <section className="py-14 lg:py-24 relative z-0 bg-blue-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1 className="max-w-2xl mx-auto slidein [--slidein-delay:300ms] opacity-0 font-bold text-2xl  text-gray-900 mb-5 md:text-4xl md:leading-normal">
                        Effortless Voice Scheduling
                        <span className="text-[#004aad]"> Available 24/7 </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-center slidein [--slidein-delay:500ms] opacity-0 text-base font-normal leading-7 text-gray-500 mb-9">
                        Our AI-powered voice bot handles every aspect of appointment scheduling with precision and ease, reducing your team’s workload and creating a frictionless experience for patients</p>
                </div>
            </section>
            <div className="w-full max-w-7xl p-5 mx-auto">
                <h2 className="md:text-4xl text-3xl md:mt-16 mt-8 font-semibold text-[#004aad] text-center md:mb-12 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="md:p-7 p-4 border border-gray-300 rounded-xl myShadow">
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-3 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex p-5 justify-center items-start md:mt-20 mt-10">
                <div className="w-full max-w-7xl my-1 flex items-center justify-between md:flex-row flex-col-reverse md:gap-10 gap-7">
                    <div className="md:max-w-[35%] w-full md:text-start text-center">
                        <img src={img2} className="w-full" alt="img" />
                    </div>
                    <ul className="flex md:p-7 flex-col rounded-lg md:max-w-[55%] w-full overflow-hidden">
                        <Accordion
                            title="Symptom Journal & Health Diary 🩺📘"
                            content={<p>Let patients log symptoms via voice, creating a detailed health record doctors can review before appointments. This gives physicians a clear, organized view of patient concerns, leading to faster and more precise care during consultations.
                                <br /><br />
                                Less time wasted. More personalized treatment.
                            </p>}
                            isOpen={openTab === 5}
                            onClick={() => toggleTab(5)}
                        />
                        <Accordion
                            title="Smart Healthcare Navigation 🗺️🏥"
                            content={
                                <>
                                    <p> Help patients find nearby pharmacies, diagnostic labs, or wellness centers with voice-guided recommendations. Whether it’s the closest pharmacy or the fastest route to your clinic, Omni Agent makes sure patients never feel lost.
                                        <br /><br />
                                        Fewer missed medications. No more confusion.
                                    </p>
                                </>
                            }
                            isOpen={openTab === 6}
                            onClick={() => toggleTab(6)}
                        />
                        <Accordion
                            title="On-Demand Telehealth Calls 📞💻"
                            content={
                                <p>
                                    If physical slots are fully booked, Omni Agent suggests virtual alternatives — seamlessly connecting patients with available doctors via voice or video.
                                    <br /><br />
                                    No empty hands. Care, anytime, anywhere.
                                </p>
                            }
                            isOpen={openTab === 7}
                            onClick={() => toggleTab(7)}
                        />
                        <Accordion
                            title="Effortless Follow-Up Scheduling 🔔📅"
                            content={
                                <p>
                                    After a consultation, Omni Agent automatically books follow-ups, ensuring patients stay on track with their care plans and never miss critical check-ups.
                                    <br /><br />
                                    Continuous care without the back-and-forth.
                                </p>
                            }
                            isOpen={openTab === 8}
                            onClick={() => toggleTab(8)}
                        />
                        <Accordion
                            title="Timely Appointment Reminders ⏰📲"
                            content={
                                <p>
                                    Reduce no-shows with automated voice or text reminders an hour before the appointment. Patients can confirm, reschedule, or cancel in seconds — no manual calls needed.
                                    <br /><br />
                                    Fewer no-shows. Smoother scheduling.
                                </p>
                            }
                            isOpen={openTab === 9}
                            onClick={() => toggleTab(9)}
                        />
                        <Accordion
                            title="Collecting Patient Feedback 📝⭐"
                            content={
                                <p>
                                    Send automated Google Forms via text or email 2–3 days after the visit. Patients can share feedback on their experience, health progress, or service quality — helping clinics improve and grow.
                                    <br /><br />
                                    Patient insights. Constant improvement.
                                </p>
                            }
                            isOpen={openTab === 10}
                            onClick={() => toggleTab(10)}
                        />
                        <Accordion
                            title="Post-Visit Instructions 📩💊"
                            content={
                                <p>
                                    Doctors can delegate post-visit care to Omni Agent: <br />
                                    "Omni, remind Mr. Smith to schedule a follow-up in two weeks and confirm he understands his medication instructions."
                                    <br /><br />
                                    Better patient adherence. Less clinical friction.
                                </p>
                            }
                            isOpen={openTab === 11}
                            onClick={() => toggleTab(11)}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Feature