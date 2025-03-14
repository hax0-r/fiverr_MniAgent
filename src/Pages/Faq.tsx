import { useState, useRef, JSX } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FaqProps {
    title: string;
    content: JSX.Element;
    isOpen: boolean;
    onClick: () => void;
}

const Faq: React.FC<FaqProps> = ({ title, content, isOpen, onClick }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <li className="border-b border-zinc-400">
            <h2
                onClick={onClick}
                className="flex flex-row justify-between items-center font-medium text-zinc-800 p-4 cursor-pointer"
            >
                <span>{title}</span>
                <IoIosArrowDown className={`transform transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
            </h2>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500"
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0" }}
            >
                <div className="text-zinc-600 px-3 pt-2 pb-4">{content}</div>
            </div>
        </li>
    );
};

const Accordion: React.FC = () => {
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
                        <Faq
                            title="What is Omni Agent?"
                            content={<p>Omni Agent is a voice-powered AI assistant designed to help healthcare providers automate appointment scheduling, reminders, follow-ups, and patient interactions. It works 24/7, handling unlimited calls so your team can focus on delivering care.</p>}
                            isOpen={openTab === 0}
                            onClick={() => toggleTab(0)}
                        />
                        <Faq
                            title="How does the setup process work?"
                            content={
                                <>
                                    <p>Getting started is simple:</p>
                                    <ul className="list-disc pl-5">
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
                        <Faq
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

export default Accordion;