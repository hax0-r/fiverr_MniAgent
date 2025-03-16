import { useState } from "react";
import Accordion from "../Components/Accordion";
import { Link } from "react-router";

const Faq: React.FC = () => {
    const [openTab, setOpenTab] = useState<number | null>(null);

    const toggleTab = (idx: number) => {
        setOpenTab(openTab === idx ? null : idx);
    };

    return (
        <main className="p-5 bg-white">
            <section className="py-14 lg:py-24 relative z-0 bg-blue-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1 className="max-w-3xl mx-auto font-bold text-2xl  text-gray-900 mb-5 md:text-4xl md:leading-normal">
                        Frequently Asked Questions
                    </h1>
                    <p className="max-w-2xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
                        Have a question? We have answers! If you can't find what you're looking for, feel free to <Link to="/contact-us" className="text-blue-500 hover:underline">contact us</Link>.</p>
                </div>
            </section>
            <div className="flex justify-center items-start mt-16">
                <div className="w-full max-w-7xl my-1 flex items-center justify-between md:flex-row flex-col md:gap-10 gap-7">
                    <div className="md:max-w-[45%] w-full md:text-start text-center">
                        <h2 className="text-zinc-800 font-semibold md:text-3xl text-2xl ">Getting Started with Omni Agent</h2>
                        <p className="text-zinc-500 md:mt-4 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit eum non sapiente voluptatibus obcaecati</p>
                    </div>
                    <ul className="flex bg-blue-50 md:p-7 p-4 flex-col rounded-lg md:max-w-[55%] w-full overflow-hidden">
                        <Accordion
                            title="What is Omni Agent?"
                            content={<p>Omni Agent is a voice-powered AI assistant designed to help healthcare providers automate appointment scheduling, reminders, follow-ups, and patient interactions. It works 24/7, handling unlimited calls so your team can focus on delivering care.</p>}
                            isOpen={openTab === 0}
                            onClick={() => toggleTab(0)}
                        />
                        <Accordion
                            title="How does the setup process work?"
                            content={
                                <>
                                    <p>Getting started is simple:</p>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>Consultation: We discuss your clinic's needs and workflow.
                                        </li>
                                        <li>Integration: Omni Agent connects with your EHR, call systems, or website.
                                        </li>
                                        <li>Customization: We fine-tune the bot's responses to match your processes.
                                        </li>
                                        <li>Training & Launch: We test and train the AI, then go live!
                                        </li>
                                    </ul>
                                </>
                            }
                            isOpen={openTab === 1}
                            onClick={() => toggleTab(1)}
                        />
                        <Accordion
                            title="Does Omni Agent require a complete system overhaul?"
                            content={
                                <p>
                                    No! Omni Agent is designed to integrate with your existing infrastructure — whether you use a call center, scheduling software, or a patient portal.
                                </p>
                            }
                            isOpen={openTab === 2}
                            onClick={() => toggleTab(2)}
                        />
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-start md:mt-16 mt-10">
                <div className="w-full max-w-7xl my-1 flex items-center justify-between md:flex-row flex-col-reverse md:gap-10 gap-7">

                    <ul className="flex bg-blue-50 md:p-7 p-4 flex-col rounded-lg md:max-w-[55%] w-full overflow-hidden">
                        <Accordion
                            title=" Is patient data secure with Omni Agent?"
                            content={<p>Absolutely. Omni Agent follows industry-standard encryption and compliance practices (like HIPAA) to ensure all patient data is handled with the highest level of security and confidentiality.</p>}
                            isOpen={openTab === 3}
                            onClick={() => toggleTab(3)}
                        />
                        <Accordion
                            title="Where is the data stored?"
                            content={
                                <p>
                                    Data is stored securely in the cloud, using trusted servers with advanced security protocols.
                                </p>
                            }
                            isOpen={openTab === 4}
                            onClick={() => toggleTab(4)}
                        />
                        <Accordion
                            title="Can clinics control data access?"
                            content={
                                <p>
                                    Yes! You decide who can access patient data, and we provide customizable permission settings for different staff roles.
                                </p>
                            }
                            isOpen={openTab === 5}
                            onClick={() => toggleTab(5)}
                        />
                    </ul>
                    <div className="md:max-w-[45%] w-full md:text-start text-center">
                        <h2 className="text-zinc-800 font-semibold md:text-3xl text-2xl ">Security & Privacy</h2>
                        <p className="text-zinc-500 md:mt-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut pariatur ducimus! Laboriosam magni quod nihil rem dolor </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start mt-16">
                <div className="w-full max-w-7xl my-1 flex items-center justify-between md:flex-row flex-col md:gap-10 gap-7">
                    <div className="md:max-w-[45%] w-full md:text-start text-center">
                        <h2 className="text-zinc-800 font-semibold md:text-3xl text-2xl ">Using Omni Agent</h2>
                        <p className="text-zinc-500 md:mt-4 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit eum non sapiente voluptatibus obcaecati</p>
                    </div>
                    <ul className="flex bg-blue-50 md:p-7 p-4 flex-col rounded-lg md:max-w-[55%] w-full overflow-hidden">
                        <Accordion
                            title="What happens if a patient calls outside office hours?"
                            content={<p>Omni Agent answers calls 24/7! It can schedule appointments, answer common questions, or direct patients to emergency services if needed.                                </p>}
                            isOpen={openTab === 6}
                            onClick={() => toggleTab(6)}
                        />
                        <Accordion
                            title="Can Omni Agent handle rescheduling and cancellations?"
                            content={
                                <>
                                    <p>Of course. Patients can confirm, reschedule, or cancel appointments through the voice bot — all without involving your staff.</p>
                                </>
                            }
                            isOpen={openTab === 7}
                            onClick={() => toggleTab(7)}
                        />
                        <Accordion
                            title="Does the AI sound robotic?"
                            content={
                                <p>
                                    Not at all. Omni Agent uses advanced natural language processing to speak in a warm, conversational tone. Most patients won’t even realize they’re speaking to AI!
                                </p>
                            }
                            isOpen={openTab === 8}
                            onClick={() => toggleTab(8)}
                        />
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-start md:mt-16 mt-10">
                <div className="w-full max-w-7xl my-1 flex items-center justify-between md:flex-row flex-col-reverse md:gap-10 gap-7">

                    <ul className="flex bg-blue-50 md:p-7 p-4 flex-col rounded-lg md:max-w-[55%] w-full overflow-hidden">
                        <Accordion
                            title=" Can we customize Omni Agent's responses?"
                            content={<p>Yes! We work with you to tailor responses, greetings, and workflows to match your clinic’s tone and processes.                                </p>}
                            isOpen={openTab === 9}
                            onClick={() => toggleTab(9)}
                        />
                        <Accordion
                            title="Does Omni Agent improve over time?"
                            content={
                                <p>
                                    Definitely. The AI learns from interactions, refining its responses and handling edge cases more effectively the longer it runs.
                                </p>
                            }
                            isOpen={openTab === 10}
                            onClick={() => toggleTab(10)}
                        />
                    </ul>
                    <div className="md:max-w-[45%] w-full md:text-start text-center">
                        <h2 className="text-zinc-800 font-semibold md:text-3xl text-2xl ">Customization & Updates</h2>
                        <p className="text-zinc-500 md:mt-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut pariatur ducimus! Laboriosam magni quod nihil rem dolor </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start mt-16">
                <div className="w-full max-w-7xl my-1 flex items-center justify-between md:flex-row flex-col md:gap-10 gap-7">
                    <div className="md:max-w-[45%] w-full md:text-start text-center">
                        <h2 className="text-zinc-800 font-semibold md:text-3xl text-2xl ">Pricing & Support</h2>
                        <p className="text-zinc-500 md:mt-4 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit eum non sapiente voluptatibus obcaecati</p>
                    </div>
                    <ul className="flex bg-blue-50 md:p-7 p-4 flex-col rounded-lg md:max-w-[55%] w-full overflow-hidden">
                        <Accordion
                            title="How much does Omni Agent cost?"
                            content={<p>Pricing depends on your clinic’s size, call volume, and customization needs. We offer flexible plans to suit different requirements — reach out to us for a personalized quote.                                </p>}
                            isOpen={openTab === 11}
                            onClick={() => toggleTab(11)}
                        />
                        <Accordion
                            title="What kind of support is available?"
                            content={
                                <>
                                    <p>We provide ongoing support, including:</p>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>24/7 email and chat support</li>
                                        <li>Regular software updates</li>
                                        <li>Performance analytics and reports</li>
                                    </ul>
                                </>
                            }
                            isOpen={openTab === 12}
                            onClick={() => toggleTab(12)}
                        />
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Faq;