import React from "react";
import { LoveIcon, NotificationIcon } from "../home";
import { Button, Indicator } from "@mantine/core";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { TbCategoryPlus } from "react-icons/tb";

export const Header = () => {
  return (
    <header className="py-[11px] px-[clamp(3.1rem,8.375vw,7.4rem)] justify-between items-center flex">
      <section className=" flex gap-[clamp(2.5rem,5.9vw,5.3rem)] items-center">
        <figure className=" w-[clamp(2.7rem,4.4vw,4.4rem)] h-[clamp(2.7rem,4.4vw,4.4rem)]">
          <Image
            className="!h-full !w-full"
            src="/logo.svg"
            width={100}
            height={0}
            alt="logo"
          />
        </figure>

        <ul className=" flex justify-between gap-[11px]">
          <li>Home</li>
          <li>Resources</li>
          <li>Mentors</li>
          <li>Blog</li>
        </ul>
      </section>
      <section className=" flex gap-[26px] ">
        <div className="flex border-[#8D9DB5]  px-[9px] border items-center rounded-[50px] min-w-[120px] w-[80%] overflow-hidden">
          <article className=" flex gap-[10px] items-center">
            <TbCategoryPlus color="#7630F7" />
            <p className=" text-black text-[14px] font-medium">Categories</p>
            <MdOutlineKeyboardArrowDown />
          </article>
          <input
            type="text"
            placeholder="Search For Mentors . . ."
            className="border-none outline-none placeholder:text-[14px] placeholder:text-[#8D9DB5] placeholder:font-normal border-l"
          />
        </div>

        {/* <TextInput styles={{
        input: {
          width:'129px'
        }
      }} placeholder="Search For Mentors . . ." icon={<div className=" flex gap-2"> <TbCategoryPlus />
          <p>Categories</p> </div>
      } />
      */}

        <div className=" flex gap-[29px]">
          <article className=" flex gap-[29px]">
            <div className=" gap-[14px] flex ">
              <Indicator inline label="0" size={18} color="#4B0082" offset={6}>
                <LoveIcon />
              </Indicator>
              <Indicator inline label="0" size={18} color="#4B0082" offset={6}>
                <NotificationIcon />
              </Indicator>
            </div>
          </article>

          <Button className=" bg-purple rounded-[50px] hover:bg-[#7630F7]">
            Log in
          </Button>
        </div>
      </section>
    </header>
  );
};
