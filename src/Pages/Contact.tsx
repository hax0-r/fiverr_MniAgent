import { Link } from 'react-router'
import img from '../assets/contactUs.avif'
import { IoMailOpenOutline } from 'react-icons/io5'

const Contact = () => {
    return (
        <>
            <div className="max-w-7xl w-full mx-auto p-5 md:mt-16 mt-8 lg:flex-row flex-col flex items-center justify-center md:gap-20 gap-10">

                <div className="md:max-w-[50%] w-full">
                    <h2 className="text-2xl font-semibold text-zinc-800 md:text-start text-center">Book a Demo & Transform Your Patient Scheduling</h2>
                    <p className='text-zinc-500 mt-3'>Fill out the form below, and we’ll reach out to schedule your live demo!</p>
                    <form className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-8 mt-5">
                        <input required type="text" className="p-3 border rounded-lg border-zinc-200" placeholder="Client Name" />
                        <input required type="text" className="p-3 border rounded-lg border-zinc-200" placeholder="Location" />
                        <input required type="text" className="p-3 border rounded-lg border-zinc-200" placeholder="Contact Person" />
                        <input required type="number" className="p-3 border rounded-lg border-zinc-200" placeholder="Phone Number" />
                        <input required type="email" className="p-3 border rounded-lg border-zinc-200" placeholder="Email Address" />
                        <input required type="date" className="p-3 border rounded-lg border-zinc-200 text-zinc-500" placeholder="Preferred Demo Date & Time" />
                        <textarea name="" rows={5} className="p-3 resize-none border rounded-lg border-zinc-200 w-full md:col-span-2" placeholder="Additional Comments"></textarea>
                        <button className='bg-[#004aad] md:col-span-2 text-white px-7 py-3 font-medium cursor-pointer transition-all duration-500 hover:bg-[#004aad]/80 rounded-lg'>Book Demo</button>
                        <p className='text-zinc-500 text-xs md:col-span-2'>See how our voice-powered AI assistant can streamline your clinic's scheduling, reduce no-shows, and enhance patient experiences — all through natural, human-like conversations.</p>
                    </form>
                </div>
                <div className="md:max-w-[50%] w-full">
                    <img src={img} alt="img" className='w-full' />
                </div>
            </div>

            <div className="max-w-7xl w-full mx-auto p-5 md:mt-20 mt-8 text-center">
                <h2 className="md:text-3xl text-2xl font-semibold text-zinc-800 ">Contact Us Directly</h2>
                <p className='text-zinc-500 mt-3'>Have questions or want to chat before booking a demo? We’d love to hear from you!</p>
                <div className="grid md:grid-cols-2 mx-auto grid-cols-1 max-w-3xl w-full  mt-7 gap-5">
                    <div className="w-full justify-center items-center text-center rounded-lg flex flex-col p-8 bg-[#004aad] myShadow">
                        <IoMailOpenOutline className="text-5xl text-[#fff]" />
                        <h2 className="text-xl font-semibold my-2 text-zinc-100">Email</h2>
                        <Link to={"mailto:support@omniagent.com"} className="text-zinc-300">support@omniagent.com</Link>
                    </div>
                    <div className="w-full justify-center items-center text-center rounded-lg flex flex-col p-8 bg-[#004aad] myShadow">
                        <IoMailOpenOutline className="text-5xl text-[#fff]" />
                        <h2 className="text-xl font-semibold my-2 text-zinc-100">Phone</h2>
                        <Link to={"tel:+18001234567"} className="text-zinc-300">+1 (800) 123-4567</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact