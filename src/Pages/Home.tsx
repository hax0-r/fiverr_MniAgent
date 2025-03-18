import { CiCircleCheck } from "react-icons/ci"
import { Link } from "react-router"
import mainImg from '../assets/contact.png'
import ProjectManager from '../assets/Project-Manager.jpg'
import LogoSlider from "../Components/LogoSlider"
import Card from "../Components/Card"


const Home = () => {
  return (
    <>
      <div>
        <div className="max-w-7xl my-5 w-full mx-auto p-5 lg:flex-row flex-col min-h-[calc(100vh-100px)] flex items-center justify-center md:gap-20 gap-14">
          <div className="w-full h-screen absolute top-0 left-0 bg-blue-50 -z-10"></div>
          <div className="lg:max-w-[60%] w-full">
            <h1 className="font-semibold slidein [--slidein-delay:300ms] opacity-0 capitalize md:text-3xl leading-tight text-lg text-zinc-900">Supercharge Your Front Desk with Omni Agent
              Automate Patient Calls. Reduce Support Costs. Elevate Care.
            </h1>
            <p className="text-zinc-600 md:mt-7 slidein [--slidein-delay:500ms] opacity-0 mt-4">Managing endless patient calls and messages for routine queries drains your team’s time and leads to long wait times, frustrated patients, and staff burnout. Omni Agent changes that.
            </p>
            {/* <p className="text-zinc-600 mt-3">
              Our AI-powered Voice & Text assistant handles appointment scheduling, FAQs, and reminders — freeing your staff to focus on patient care. Reduce operational costs, streamline communication, and deliver 24/7 support without adding to your payroll.
            </p> */}

            <ul className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8 text-zinc-800 slidein [--slidein-delay:700ms] opacity-0">
              <li className="flex items-center text-sm gap-1.5"><CiCircleCheck className="text-lg text-[#0c4fae]" /> Instant Response to Patient Inquiries</li>
              <li className="flex items-center text-sm gap-1.5"><CiCircleCheck className="text-lg text-[#0c4fae]" /> 24/7 Availability — No Missed Calls
              </li>
              <li className="flex items-center text-sm gap-1.5"><CiCircleCheck className="text-lg text-[#0c4fae]" /> Seamless Appointment Scheduling</li>
              <li className="flex items-center text-sm gap-1.5"><CiCircleCheck className="text-lg text-[#0c4fae]" /> Cost-Effective Workflow Automation</li>
            </ul>

            <h4 className="font-medium mt-8 text-lg mb-2 text-zinc-900 slidein [--slidein-delay:800ms] opacity-0">Ready to revolutionize patient interactions?</h4>
            <p className="text-zinc-800 slidein [--slidein-delay:800ms] opacity-0"><Link to={"/"} className="font-medium underline text-zinc-900 hover:no-underline">Book a Demo Today</Link> and see how Omni Agent transforms your practice.</p>
          </div>
          <div className="lg:max-w-[40%] w-full slidein [--slidein-delay:300ms] opacity-0">
            <img src={mainImg} alt="" />
          </div>
        </div>

        <div className="max-w-7xl mt-5 w-full mx-auto p-5">
          <LogoSlider />
        </div>

        <div className="max-w-7xl md:mt-24 mt-12 w-full mx-auto p-5">
          <h2 className="text-center text-zinc-800 font-semibold md:text-2xl text-lg max-w-2xl w-full mx-auto">VOICE AI BUILT FOR HEALTHCARE PROVIDERS OF ALL SIZES
            Effortless Appointment Scheduling, 24/7</h2>
          <p className="text-zinc-500 mt-4 text-center max-w-4xl w-full mx-auto text-sm">Streamline your front desk with Omni Agent — a human-like voice bot that answers patient calls, books appointments, and manages reminders around the clock. Say goodbye to long wait times and missed calls, and let your team focus on delivering care.</p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:mt-16 mt-10">
            <Card />
          </div>
          <p className="text-lg font-medium text-center md:mt-16 mt-8 text-zinc-700">Let Omni Agent take care of scheduling — so you can take care of patients.</p>
        </div>

        <div className="max-w-7xl my-5 w-full mx-auto p-5 lg:flex-row flex-col min-h-[calc(100vh-100px)] flex items-center justify-center md:gap-20 gap-14">
          <div className="lg:max-w-[50%] w-full">

            <h1 className="font-semibold md:text-2xl text-lg text-zinc-900">Save Time and Minimize No-Shows
              Never Chase Patients for Appointments Again</h1>
            <p className="text-zinc-600 md:mt-7 mt-4">Imagine a world where your front desk never has to dial out for reminders. With Omni Agent, your AI-powered voice bot calls patients automatically to remind them of upcoming appointments, confirm bookings, or reschedule if needed. No human follow-ups, no forgotten slots — just a smooth, reliable system that keeps your schedule on track.
            </p>
            <ul className="space-y-2.5 gap-5 mt-8 text-zinc-800">
              <li className="flex items-center text-sm gap-1.5"><CiCircleCheck className="text-lg text-[#0c4fae]" /> Patients get a friendly voice reminder.
              </li>
              <li className="flex items-center text-sm gap-1.5"><CiCircleCheck className="text-lg text-[#0c4fae]" /> Your staff gets more time for in-person care.
              </li>
              <li className="flex items-center text-sm gap-1.5"><CiCircleCheck className="text-lg text-[#0c4fae]" /> Your practice sees fewer empty time slots.
              </li>
            </ul>
            <p className="text-zinc-800 mt-12">It’s not just automation. It’s peace of mind.</p>
          </div>
          <div className="lg:max-w-[50%] w-full">
            <img src={ProjectManager} alt="" />
          </div>
        </div>

        <div className="bg-[#0049ad] md:p-10 p-5">
          <div className="max-w-7xl my-5 w-full mx-auto py-5 text-center">

            <h2 className="text-white font-semibold md:text-3xl text-2xl">We Help To GrowYour Business</h2>
            <p className="max-w-5xl w-full mx-auto text-blue-100 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit assumenda ullam dolorum quos, omnis quae consequatur, fugit quasi rerum praesentium? Odit officia sunt veniam vitae ipsa eaque minima nulla!</p>

            <div className="grid text-white md:grid-cols-4 grid-cols-2 gap-5 md:mt-16 mt-10">

              <div className="">
                <h2 className="font-semibold text-4xl mb-2">142+</h2>
                <p className="text-zinc-300">Project Completed</p>
              </div>
              <div className="">
                <h2 className="font-semibold text-4xl mb-2">30k</h2>
                <p className="text-zinc-300"> Total Follwers</p>
              </div>
              <div className="">
                <h2 className="font-semibold text-4xl mb-2">53M</h2>
                <p className="text-zinc-300">
                  Total View
                </p>
              </div>
              <div className="">
                <h2 className="font-semibold text-4xl mb-2">95%</h2>
                <p className="text-zinc-300">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col  md:mt-32 mt-14 text-center p-5">
          <h2 className="md:text-4xl text-3xl font-semibold tracking-tight capitalize text-zinc-800 ">Subscribe to our newsletter</h2>
          <p className="mt-4 text-lg text-gray-500">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
            dolore.
          </p>
          <form className="mt-6 flex max-w-xl w-full gap-x-2">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="border-zinc-300 w-full flex-auto rounded-md border px-3.5 py-2"
            />
            <button className='bg-[#004aad]  text-white px-7 py-3 font-medium cursor-pointer transition-all duration-500 hover:bg-[#004aad]/80 rounded-lg'>Subscribe</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home