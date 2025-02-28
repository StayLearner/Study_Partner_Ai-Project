"use client";

import { CourseCountContext } from "@/app/_context/CourseCountContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { icons, LayoutDashboard, Shield, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { motion } from "framer-motion";


function SideBar() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];

   
  
  const {totalCourse,setTotalCourse}=useContext(CourseCountContext);
  const path = usePathname();
  return (
    <div className='h-screen shadow-md p-5 '>
    <div className="flex items-center gap-2">


    <Link href={'/'} className="w-full">
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    className="flex items-center gap-2"
  >
    <Image src="/logo.svg" alt="logo" width={40} height={40} />
    <h1 className="text-2xl font-bold text-blue-700">Study Smart</h1>
  </motion.div>
</Link>





    </div>

      <div className="mt-10">

        <motion.h1
                className="text-xl font-bold text-white "
                whileHover={{ scale: 1.05 }}
              >
<Link href={'/create'} className="w-full">
        <Button className="w-full bg-black">+ Create New</Button>
      </Link>
              </motion.h1>
      

        <div className="mt-5">
          {MenuList.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <div
              key={index}
              className={`flex gap-5 items-center p-3
                hover:bg-slate-200 rounded-lg cursor-pointer mt-3 
                ${path == menu.path && 'bg-slate-200'}`}>
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
              </Link>
          ))}
        </div>
      </div>

      <div className="border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[85%]">
        <h2 className="text-lg mb-2">Available Credits : {(20-totalCourse)}</h2>
        <Progress value={(totalCourse/20)*100}  />
        <h2 className="text-sm">{totalCourse} ot of 5 credits used</h2>

        <Link href={"/dashboard/upgrade"} className="text-primary text-xs mt-3">
          Upgrade to create more
        </Link>

        
      </div>
    </div>
  );
}

export default SideBar;
