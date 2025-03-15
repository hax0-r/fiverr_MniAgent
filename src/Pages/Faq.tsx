import { useState } from "react";
import Accordion from "../Components/Accordion";

const Faq: React.FC = () => {
    const [openTab, setOpenTab] = useState<number | null>(null);

    const toggleTab = (idx: number) => {
        setOpenTab(openTab === idx ? null : idx);
    };

    return (
        <main className="lg:p-5 bg-white">
            <h2 className="text-4xl md:mt-20 mt-10 font-semibold text-zinc-800 text-center">Frequently Asked Questions</h2>
            <div className="flex justify-center items-start mt-10">
                <div className="w-full max-w-[1000px] my-1">
                    <ul className="flex flex-col rounded-lg overflow-hidden">
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
        </main>
    );
};

export default Faq;