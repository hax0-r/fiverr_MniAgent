import { useRef, JSX } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
    title: string;
    content: JSX.Element;
    isOpen: boolean;
    onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onClick }) => {
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
}

export default Accordion