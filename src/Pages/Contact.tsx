import img from '../assets/contact.png'

const Contact = () => {
    return (
        <>
            <div className="max-w-7xl w-full mx-auto p-5 md:mt-16 mt-8 lg:flex-row flex-col flex items-center justify-center md:gap-40 gap-10">

                <div className="md:max-w-[55%] w-full">
                    <h2 className="text-2xl font-semibold text-zinc-800 md:text-start text-center">Book a Demo & Transform Your Patient Scheduling</h2>
                    <form className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-8 mt-5">
                        <input required type="text" className="p-3 border rounded-lg border-zinc-200" placeholder="Client Name" />
                        <input required type="text" className="p-3 border rounded-lg border-zinc-200" placeholder="Location" />
                        <input required type="text" className="p-3 border rounded-lg border-zinc-200" placeholder="Contact Person" />
                        <input required type="number" className="p-3 border rounded-lg border-zinc-200" placeholder="Phone Number" />
                        <input required type="email" className="p-3 border rounded-lg border-zinc-200" placeholder="Email Address" />
                        <input required type="date" className="p-3 border rounded-lg border-zinc-200 text-zinc-500" placeholder="Preferred Demo Date & Time" />
                        <textarea name="" rows={5} className="p-3 resize-none border rounded-lg border-zinc-200 w-full md:col-span-2" placeholder="Additional Comments"></textarea>
                        <button className='bg-[#004aad] md:col-span-2 text-white px-7 py-3 font-medium cursor-pointer transition-all duration-500 hover:bg-[#004aad]/80 rounded-lg'>Book Demo</button>
                    </form>
                </div>
                <div className="md:max-w-[45%] w-full">
                    <img src={img} alt="img" className='w-full' />
                </div>

            </div>
        </>
    )
}

export default Contact