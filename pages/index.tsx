// import { Header, Navbar } from "@/src/components/layout";
import { MdArrowForward } from "react-icons/md";
import { Button } from "@mantine/core";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { PiPhoneCallLight } from "react-icons/pi";
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" flex flex-col  w-full ">
       {/* <Navbar/> */}
      {/* <Header /> */}
      <section className=" bg-[#85608833] h-[500px] flex justify-between px-[200px]">
        <section className=" flex flex-col gap-[34px] item-center justify-center mx-auto">
          <div className=" fle flex-col gap-[11px]">
            <article className=" flex ">
              <h4 className=" text-[40px] font-medium text-black">Unlock Your </h4>
              <h3>Potential</h3>
            </article>
            <p>Dream big with mentors to help guide your way.</p>
          </div>
          <Button className="bg-purple w-fit rounded-[50px]" rightIcon={<MdArrowForward/>}>Get Started</Button>
        </section>
        <div className=" bg-no-repeat bg-cover h-[450px]">
          <Image src="/header-bg.svg" className="h-full" alt="header-svg" width={100} height={100}/>
        </div>
      </section>
    </main>
  );
}
