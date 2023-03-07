import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import { HiLocationMarker } from "react-icons/hi";
import { BiAlarm, BiPhone } from "react-icons/bi";
import { BsMailbox, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiKeyring } from "react-icons/gi";
const Contact = () => {
  return (
    <div>
      <MiniHeader
        heading={"Contact Us"}
        subHeading={"Your Property. Our Priority."}
      />

      <LeaveAMessage header={"MESSAGE US BELOW!"} />
      <div className="bg-[#111] px-4 py-8">
        <div className=" md:p-10  mx-auto">
          <h1 className="font-primary tracking-wide text-3xl text-center mt-8 text-white">
            You Can Find Us @
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full max-w-screen-xl mx-auto p-5">
            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <HiLocationMarker />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1 text-white">
                  Los Angeles Office
                </h2>
                <p className="text-secondary">
                  5500 Hollywood Blvd, Ste 212 Los Angeles, CA 90028
                </p>
              </div>
            </div>
            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <HiLocationMarker />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1 text-white">
                  Los Angeles Office
                </h2>
                <p className="text-secondary">
                  5500 Hollywood Blvd, Ste 212 Los Angeles, CA 90028
                </p>
              </div>
            </div>
            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <HiLocationMarker />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1 text-white">
                  Los Angeles Office
                </h2>
                <p className="text-secondary">
                  5500 Hollywood Blvd, Ste 212 Los Angeles, CA 90028
                </p>
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BiPhone />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1 text-white">
                  (000) 000-0000
                </h2>
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BsMailbox />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1 text-white">
                  admin@admin.com
                </h2>
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BiAlarm />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1 text-white">
                  M-F 8:30 am – 5 pm
                  <br /> Saturday 9 am – 2 pm
                  <br />
                  Our office is closed Sundays.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full flex justify-center text-center">
          <Link className="group">
            <div className="p-3 outline outline-1 inline-block rounded-full  outline-white rotate-0 group-hover:rotate-[360deg] group-hover:scale-90 duration-300">
              <BsPeople size={24} />
            </div>
            <p className="text-secondary text-sm tracking-wider mt-1 group-hover:text-white">
              OWNER LOGIN
            </p>
          </Link>

          <Link className="ml-10 group">
            <div className="p-3 outline outline-1 inline-block rounded-full  outline-white rotate-0 group-hover:rotate-[360deg] group-hover:scale-90 duration-300">
              <GiKeyring size={24} />
            </div>
            <p className="text-secondary text-sm tracking-wider mt-1 group-hover:text-white">
              TENANT LOGIN
            </p>
          </Link>
        </div>
      </div>

      <div className="min-h-[140px] bg-white p-6 flex items-center justify-center flex-col md:flex-row text-center">
        <p className="text-3xl font-primary uppercase tracking-wider mb-4 md:mb-0 md:mr-6 ">
          START YOUR RENTAL SEARCH TODAY
        </p>
        <button className="outline outline-black px-10 py-3 uppercase text-sm outline-1 rounded-full">
          Find a home
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
