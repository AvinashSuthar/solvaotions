"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";
import {  TextRevealCard } from "./TextEffect";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {

  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full  fixed top-0 inset-x-0 mx-auto h-20  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        <div className="flex justify-around w-full items-center text-2xl">
          <div className=" flex justify-center items-center gap-2">
            <Image width={50} height={50} alt="logo" src="/logo.png" />
            <TextRevealCard text="Solvaotions" revealText="Solvaotions " />
          </div>
          <div className="flex justify-center gap-8 items-center">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative  dark:text-neutral-500 items-center flex space-x-1 text-neutral-600  hover:text-white transition-all duration-300 dark:hover:text-white "
                )}
              >
                <span className="block  sm:hidden">{navItem.icon}</span>
                <span className="hidden text-xl sm:block ">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
